import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:practical_skills/common/const/data.dart';

class CustomInterceptor extends Interceptor {
  final FlutterSecureStorage storage;

  CustomInterceptor({
    required this.storage,
  });

  /// 1) 요청을 보낼 때
  ///
  /// 요청이 보내질 때마다
  /// 만약에 요청의 Header에 accessToken: true라는 값이 있다면
  /// 실제 토큰을 가져와서 (storage에서) authorization: bearer $token 으로
  /// 해더를 변경한다.
  @override
  Future<void> onRequest(RequestOptions options, RequestInterceptorHandler handler) async {
    debugPrint('[REQUEST] [${options.method}] ${options.uri}');

    if (options.headers['accessToken'] == true) {
      // 해더 삭제.
      options.headers.remove('accessToken');

      // 실제 토큰으로 대체
      final token = await storage.read(key: accessTokenKey);
      options.headers.addAll({
        authorization: '$bearer $token',
      });
    }

    if (options.headers['refreshToken'] == true) {
      // 해더 삭제.
      options.headers.remove('refreshToken');

      // 실제 토큰으로 대체
      final token = await storage.read(key: refreshTokenKey);
      options.headers.addAll({
        authorization: '$bearer $token',
      });
    }

    super.onRequest(options, handler);
  }

  /// 2) 응답을 받을 때
  @override
  void onResponse(Response response, ResponseInterceptorHandler handler) {
    debugPrint('[RESPONSE] [${response.requestOptions.method}] ${response.requestOptions.uri}');

    super.onResponse(response, handler);
  }

  /// 3) 에러가 났을 때
  @override
  Future<void> onError(DioException err, ErrorInterceptorHandler handler) async {
    debugPrint('[ERROR] [${err.requestOptions.method}] ${err.requestOptions.uri}');

    _updateAccessToken(err, handler);

    super.onError(err, handler);
  }

  Future<void> _updateAccessToken(DioException err, ErrorInterceptorHandler handler) async {
    // 401 error
    // 토큰을 재발급 받는 시도를 하고 토큰이 재발급 되면
    // 다시 새로운 토큰으로 요청을 한다.
    final refreshToken = await storage.read(key: refreshTokenKey);

    // refreshToken 아예 없으면 당연히 에러를 던진다.
    if (refreshToken == null) {
      // 에어를 던질 때 handler.reject를 사용한다.
      return handler.reject(err);
    } else {
      final isStatus401 = err.response?.statusCode == 401;

      // refreshToken 업데이트 오류일 경우.
      final isPathRefresh = err.requestOptions.path == '/auth/token';

      // accessToken 새로고침.
      if (isStatus401 && !isPathRefresh) {
        final dio = Dio();

        try {
          final accessTokenResponse = await dio.post(
            '$ip/auth/token',
            options: Options(
              headers: {
                authorization: '$bearer $refreshToken',
              },
            ),
          );

          final accessToken = accessTokenResponse.data['accessToken'];

          // 토큰 변경하기.
          final options = err.requestOptions;
          options.headers.addAll({
            authorization: '$bearer $accessToken',
          });

          // 새로운 토큰 저장.
          await storage.write(key: accessTokenKey, value: accessToken);

          // 재요청하기.
          final newResponse = await dio.fetch(options);
          return handler.resolve(newResponse);
        } on DioException catch (e) {
          return handler.reject(e);
        }
      }
    }
  }
}
