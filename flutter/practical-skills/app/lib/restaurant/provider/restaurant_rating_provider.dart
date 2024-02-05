import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/model/cursor_pagination_model.dart';
import 'package:practical_skills/common/repository/base_pagination_repository.dart';

class RestaurantRatingStateNotifier extends StateNotifier<CursorPaginationBase> {
  final BasePaginationRepositoryInterface repository;

  RestaurantRatingStateNotifier({required this.repository}) : super(CursorPaginationLoadingState());
}
