import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/model/cursor_pagination_model.dart';
import 'package:practical_skills/common/model/model_id.dart';
import 'package:practical_skills/common/utils/pagination_utils.dart';

import '../provider/pagination_provider.dart';

typedef PaginationWidgetBuilder<T extends ModelIdInterface> = Widget Function(
  BuildContext context,
  int index,
  T model,
);

class PaginationListView<T extends ModelIdInterface> extends ConsumerStatefulWidget {
  final StateNotifierProvider<PaginationProvider, CursorPaginationBase> provider;
  final PaginationWidgetBuilder<T> itemBuilder;

  const PaginationListView({
    super.key,
    required this.provider,
    required this.itemBuilder,
  });

  @override
  ConsumerState<PaginationListView> createState() => _PaginationListViewState<T>();
}

class _PaginationListViewState<T extends ModelIdInterface>
    extends ConsumerState<PaginationListView> {
  final ScrollController _scrollController = ScrollController();

  void listener() {
    PagiantionUtils.paginate(
      controller: _scrollController,
      provider: ref.read(widget.provider.notifier),
    );
  }

  @override
  void initState() {
    _scrollController.addListener(listener);
    super.initState();
  }

  @override
  void dispose() {
    _scrollController
      ..removeListener(listener)
      ..dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(widget.provider);

    if (state is CursorPaginationLoadingState) {
      return const Center(
        child: CircularProgressIndicator(),
      );
    } else if (state is CursorPaginationErrorState) {
      return Center(
        child: Text(state.message),
      );
    }

    // CursorPagination.
    // CursorPaginationFetchingMore.
    // CursorPaginationRefetching.

    else {
      final data = (state as CursorPagination<T>).data;

      return RefreshIndicator(
        onRefresh: () async {
          ref.read(widget.provider.notifier).paginate(
                forceRefetch: true,
              );
        },
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: ListView.separated(
            physics: const AlwaysScrollableScrollPhysics(),
            controller: _scrollController,
            itemCount: data.length + 1,
            separatorBuilder: (context, index) => const SizedBox(height: 20),
            itemBuilder: (context, index) {
              if (index == data.length) {
                return Center(
                  child: state is CursorPaginationFetchingMoreState
                      ? const CircularProgressIndicator()
                      : const Text('마지막 데이터'),
                );
              }

              final model = data[index];
              return widget.itemBuilder(context, index, model);
            },
          ),
        ),
      );
    }
  }
}
