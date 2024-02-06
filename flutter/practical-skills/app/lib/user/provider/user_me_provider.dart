import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:practical_skills/common/const/data.dart';
import 'package:practical_skills/user/model/user_model.dart';
import 'package:practical_skills/user/repository/user_me_repository.dart';

class UserMeStateNotifier extends StateNotifier<UserModelBase?> {
  final UserMeRepository repository;
  final FlutterSecureStorage storage;

  UserMeStateNotifier({
    required this.repository,
    required this.storage,
  }) : super(UserModelLoading()) {
    getMe();
  }

  Future<void> getMe() async {
    final refreshToken = await storage.read(key: refreshTokenKey);
    final accessToken = await storage.read(key: accessTokenKey);

    if (refreshToken == null || accessToken == null) {
      return;
    }

    final response = await repository.getMe();

    state = response;
  }
}
