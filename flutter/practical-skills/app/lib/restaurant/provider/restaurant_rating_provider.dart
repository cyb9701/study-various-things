import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/model/cursor_pagination_model.dart';

final restaurantRatingProvider = StateNotifierProvider<CursorPaginationBase>((ref) {});

class RestaurantRatingStateNotifier extends StateNotifier<CursorPaginationBase> {
  RestaurantRatingStateNotifier() : super(CursorPaginationLoadingState());
}
