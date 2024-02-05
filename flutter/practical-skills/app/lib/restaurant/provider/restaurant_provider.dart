import 'package:collection/collection.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/model/cursor_pagination_model.dart';
import 'package:practical_skills/common/provider/pagination_provider.dart';
import 'package:practical_skills/restaurant/provider/restaurant_repository_provider.dart';

import '../model/restaurant_model.dart';
import '../repository/restaurant_repository.dart';

final restaurantProvider = StateNotifierProvider<RestaurantStateNotifier, CursorPaginationBase>(
  (ref) {
    final repository = ref.watch(restaurantRepositoryProvider);
    final notifier = RestaurantStateNotifier(repository: repository);
    return notifier;
  },
);

final restaurantDetailProvider = Provider.family<RestaurantModel?, String>((ref, id) {
  final state = ref.watch(restaurantProvider);
  if (state is! CursorPagination) {
    return null;
  }

  return state.data.firstWhereOrNull((e) => e.id == id);
});

class RestaurantStateNotifier extends PaginationProvider<RestaurantModel, RestaurantRepository> {
  RestaurantStateNotifier({
    required super.repository,
  });

  Future<void> getDetail({
    required String id,
  }) async {
    // 만약에 아직 데이터가 하나도 없는 상태라면 (CursorPagination이 아니라면)
    // 데이터를 가져오는 시도를 한다.
    if (state is! CursorPagination) {
      await paginate();
    }

    // state가 CursorPagination이 아닐 때 그냥 리턴.
    if (state is! CursorPagination) {
      return;
    }

    final paginationState = state as CursorPagination;

    final response = await repository.getRestaurantDetail(rid: id);

    // [RestaurantModel(1), RestaurantModel(2), RestaurantModel(3)]
    // 요청 id:10,
    // list.weher((e) => e.id == 10 )) 데이터 X
    // 데이터가 없을때는 그냥 캐시의 끝에다가 데이터를 추가해버린다.
    if (paginationState.data.where((e) => e.id == id).isEmpty) {
      state = paginationState.copyWith(
        data: <RestaurantModel>[
          ...paginationState.data,
          response,
        ],
      );
    }

    // [RestaurantModel(1), RestaurantModel(2), RestaurantModel(3)]
    // id가 2인 친구를 Detail모델을 가져와라.
    // [RestaurantModel(1), RestaurantDetailModel(2), RestaurantModel(3)]
    else {
      state = paginationState.copyWith(
        data: paginationState.data.map<RestaurantModel>((e) => e.id == id ? response : e).toList(),
      );
    }
  }
}
