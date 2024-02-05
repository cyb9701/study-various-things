import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/model/cursor_pagination_model.dart';
import 'package:practical_skills/restaurant/model/restaurant_model.dart';
import 'package:practical_skills/restaurant/provider/restaurant_provider.dart';

final restaurantDetailProvider = Provider.family<RestaurantModel?, String>((ref, id) {
  final state = ref.watch(restaurantProvider);
  if (state is! CursorPaginationModel<RestaurantModel>) {
    return null;
  }

  return state.data.firstWhere((e) => e.id == id);
});
