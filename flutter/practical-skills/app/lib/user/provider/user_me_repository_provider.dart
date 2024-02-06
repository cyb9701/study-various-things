import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/const/data.dart';
import 'package:practical_skills/common/dio/dio_provider.dart';
import 'package:practical_skills/user/repository/user_me_repository.dart';

final userMeRepositoryProvider = Provider<UserMeRepository>((ref) {
  final dio = ref.watch(dioProvider);
  final notifier = UserMeRepository(dio, baseUrl: '$ip/user/me');
  return notifier;
});
