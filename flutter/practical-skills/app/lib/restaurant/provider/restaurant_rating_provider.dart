import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/model/cursor_pagination_model.dart';
import 'package:practical_skills/common/provider/pagination_provider.dart';
import 'package:practical_skills/rating/model/rating_model.dart';
import 'package:practical_skills/restaurant/provider/restaurant_rating_repository_provider.dart';
import 'package:practical_skills/restaurant/repository/restaurant_rating_repository.dart';

final restaurantRatingProvider =
    StateNotifierProvider.family<RestaurantRatingStateNotifier, CursorPaginationBase, String>(
        (ref, id) {
  final repository = ref.watch(restaurantRatingRepositoryProvider(id));
  final notifier = RestaurantRatingStateNotifier(repository: repository);
  return notifier;
});

class RestaurantRatingStateNotifier
    extends PaginationProvider<RatingModel, RestaurantRatingRepository> {
  @override
  RestaurantRatingStateNotifier({required super.repository});
}
