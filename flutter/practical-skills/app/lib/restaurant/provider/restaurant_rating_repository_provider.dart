import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/const/data.dart';
import 'package:practical_skills/common/dio/dio_provider.dart';
import 'package:practical_skills/restaurant/repository/restaurant_rating_repository.dart';

final restaurantRatingRepositoryProvider =
    Provider.family<RestaurantRatingRepository, String>((ref, id) {
  final dio = ref.watch(dioProvider);
  return RestaurantRatingRepository(dio, baseUrl: '$ip/restaurant/$id/rating');
});
