import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/const/data.dart';
import 'package:practical_skills/common/dio/dio_provider.dart';
import 'package:practical_skills/restaurant/repository/restaurant_repository.dart';

final restaurantRepositoryProvider = Provider<RestaurantRepository>((ref) {
  final dio = ref.watch(dioProvider);

  final respository = RestaurantRepository(dio, baseUrl: '$ip/restaurant');

  return respository;
});
