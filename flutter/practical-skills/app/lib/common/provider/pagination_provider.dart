import 'package:debounce_throttle/debounce_throttle.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/model/cursor_pagination_model.dart';
import 'package:practical_skills/common/model/model_id.dart';

import '../model/pagination_params.dart';
import '../repository/base_pagination_repository.dart';

class PaginationProvider<T extends ModelIdInterface, U extends BasePaginationRepositoryInterface<T>>
    extends StateNotifier<CursorPaginationBase> {
  final U repository;

  final paginationThrttole = Throttle(
    const Duration(seconds: 3),
    initialValue: _PaginationInfo(),
    checkEquality: false,
  );

  PaginationProvider({required this.repository}) : super(CursorPaginationLoadingState()) {
    paginate();
    paginationThrttole.values.listen((event) {
      _throttledPagination(event);
    });
  }

  Future<void> paginate({
    int fetchCount = 20,

    // 추가로 데이터 더 가져오기.
    bool fetchMore = false,

    // 강제로 다시 로딩.
    bool forceRefetch = false,
  }) async {
    paginationThrttole.setValue(
      _PaginationInfo(
        fetchCount: fetchCount,
        fetchMore: fetchMore,
        forceRefetch: forceRefetch,
      ),
    );
  }

  void _throttledPagination(_PaginationInfo info) async {
    final fetchCount = info.fetchCount;
    final fetchMore = info.fetchMore;
    final forceRefetch = info.forceRefetch;

    try {
      /**
     * 바로 반환하는 상황.
     */
      // 1) hasMore = false (기존 상태에서 이미 다음 데이터가 없다는 값을 들고 있다면)
      if (state is CursorPagination<T> && !forceRefetch) {
        final paginationState = state as CursorPagination<T>;
        if (!paginationState.meta.hasMore) {
          return;
        }
      }

      // 2) 로딩 중 - fetchMore = true (false - 새로고침의 의도가 있기 때문에 요청을 진행한다.)
      final isLoading = state is CursorPaginationLoadingState;
      final isRefetching = state is CursorPaginationRefetchingState;
      final isFetchingMore = state is CursorPaginationFetchingMoreState;
      if (fetchMore && (isLoading || isRefetching || isFetchingMore)) {
        return;
      }

      /**
     * 요청.
     * 
     * state
     * 1) CursorPagination - 정상적으로 데이터가 있는 상태.
     * 2) CursorPaginationLoading - 데이터가 로딩 중인 상태 (현재 캐시 없음).
     * 3) CursorPaginationError - 에러가 있는 상태.
     * 4) CursorPaginationRefetching - 첫번째 페이지부터 다시 데이터를 가져올 때.
     * 5) CursorPaginationFetchMore - 추가 데이터를 paginate 해오라는 요청을 받았을 때.
     */
      PaginationParams params = PaginationParams(
        count: fetchCount,
      );

      // fetchMore
      // 데이터를 추갈 더 가져오는 상황
      if (fetchMore) {
        final paginationState = state as CursorPagination<T>;

        // ui 업데이트.
        state = CursorPaginationFetchingMoreState(
          meta: paginationState.meta,
          data: paginationState.data,
        );

        params = params.copyWith(
          after: paginationState.data.last.id,
        );
      }

      // 데이터를 처음부터 가져오는 상황.
      else {
        // 만약에 데이터가 있는 상황이라면 기존 데이터로 보존한채로 Fetch를 진행.
        if (state is CursorPagination<T> && forceRefetch) {
          final paginationState = state as CursorPagination<T>;
          state = CursorPaginationRefetchingState(
            meta: paginationState.meta,
            data: paginationState.data,
          );
        } else {
          state = CursorPaginationLoadingState();
        }
      }

      final response = await repository.paginate(paginationParams: params);

      if (state is CursorPaginationFetchingMoreState) {
        final paginationState = state as CursorPaginationFetchingMoreState;

        // 기존 데이터에 새로운 데이터 추가.
        state = response.copyWith(
          data: [
            ...paginationState.data,
            ...response.data,
          ],
        );
      } else {
        state = response;
      }
    } catch (e, s) {
      debugPrint(s.toString());
      state = CursorPaginationErrorState(message: '데이터를 가져오지 못했습니다.');
    }
  }
}

class _PaginationInfo {
  final int fetchCount;
  final bool fetchMore;
  final bool forceRefetch;

  _PaginationInfo({
    this.fetchCount = 20,
    this.fetchMore = false,
    this.forceRefetch = false,
  });
}
