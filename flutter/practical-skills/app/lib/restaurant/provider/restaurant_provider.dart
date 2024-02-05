import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/model/cursor_pagination_model.dart';
import 'package:practical_skills/common/model/pagination_params.dart';
import 'package:practical_skills/restaurant/provider/restaruant_repository_provider.dart';

import '../repository/restaurant_repository.dart';

final restaurantProvider = StateNotifierProvider<RestaurantStateNotifier, CursorPaginationBase>(
  (ref) {
    final repository = ref.watch(restaurantRepositoryProvider);
    final notifier = RestaurantStateNotifier(repository: repository);
    return notifier;
  },
);

class RestaurantStateNotifier extends StateNotifier<CursorPaginationBase> {
  final RestaurantRepository repository;
  RestaurantStateNotifier({
    required this.repository,
  }) : super(CusorPaginationLoadingState()) {
    paginate();
  }

  Future<void> paginate({
    int fetchCount = 20,

    // 추가로 데이터 더 가져오기.
    bool fetchMore = false,

    // 강제로 다시 로딩.
    bool forceRefetch = false,
  }) async {
    // 5가지 가능성.
    // state의 상태.

    // 1) CursorPagination - 정상적으로 데이터가 있는 상태.

    // 2) CursorPaginationLoading - 데이터가 로딩 중인 상태 (현재 캐시 없음).

    // 3) CursorPaginationError - 에러가 있는 상태.

    // 4) CursorPaginationRefetching - 첫번째 페이지부터 다시 데이터를 가져올 때.

    // 5) CursorPaginationFetchMore - 추가 데이터를 paginate 해오라는 요청을 받았을 때.

    const params = PaginationParams();
    final response = await repository.paginate(paginationParams: params);
    state = response;
  }
}
