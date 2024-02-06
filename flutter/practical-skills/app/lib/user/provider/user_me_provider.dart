import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:practical_skills/common/const/data.dart';
import 'package:practical_skills/common/secure_storage/secure_storage_provider.dart';
import 'package:practical_skills/user/model/user_model.dart';
import 'package:practical_skills/user/provider/user_me_repository_provider.dart';
import 'package:practical_skills/user/repository/auth_repository.dart';
import 'package:practical_skills/user/repository/user_me_repository.dart';

final userMeProvider = StateNotifierProvider<UserMeStateNotifier, UserModelBase?>((ref) {
  final authRepository = ref.watch(authRepositoryProvider);
  final userMeRepository = ref.watch(userMeRepositoryProvider);
  final storage = ref.watch(secureStorageProvider);

  final notifier = UserMeStateNotifier(
    authRepository: authRepository,
    userMeRepository: userMeRepository,
    storage: storage,
  );

  return notifier;
});

class UserMeStateNotifier extends StateNotifier<UserModelBase?> {
  final AuthRepository authRepository;
  final UserMeRepository userMeRepository;
  final FlutterSecureStorage storage;

  UserMeStateNotifier({
    required this.authRepository,
    required this.userMeRepository,
    required this.storage,
  }) : super(UserModelLoading()) {
    getMe();
  }

  Future<void> getMe() async {
    try {
      final refreshToken = await storage.read(key: refreshTokenKey);
      final accessToken = await storage.read(key: accessTokenKey);

      if (refreshToken == null || accessToken == null) {
        state = null;
        return;
      }

      final response = await userMeRepository.getMe();

      state = response;
    } catch (_) {
      state = UserModelError(message: '로그인 실패했습니다.');
    }
  }

  Future<UserModelBase> login({
    required String username,
    required String password,
  }) async {
    try {
      state = UserModelLoading();

      final response = await authRepository.login(
        username: username,
        password: password,
      );

      await storage.write(key: refreshTokenKey, value: response.refreshToken);
      await storage.write(key: accessTokenKey, value: response.accessToken);

      final userResponse = await userMeRepository.getMe();

      state = userResponse;

      return userResponse;
    } catch (_) {
      state = UserModelError(message: '로그인 실패했습니다.');

      return Future.value(state);
    }
  }

  Future<void> logout() async {
    state = null;

    // Future 동시에 실행.
    await Future.wait([
      storage.delete(key: refreshTokenKey),
      storage.delete(key: accessTokenKey),
    ]);
  }
}
