import 'package:dio/dio.dart';
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
    print('[REQUEST] [${options.method}] ${options.uri}');

    if (options.headers['accessToken'] == true) {
      print('1');
      // 해더 삭제.
      options.headers.remove('accessToken');

      // 실제 토큰으로 대체
      final token = await storage.read(key: accessTokenKey);
      print(token);
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

  /// 3) 에러가 났을 때
}
