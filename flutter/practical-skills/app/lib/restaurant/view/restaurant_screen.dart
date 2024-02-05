import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/restaurant/provider/restaurant_provider.dart';
import 'package:practical_skills/restaurant/view/restaurant_detail_screen.dart';

import '../../common/model/cursor_pagination_model.dart';
import '../component/restaurant_card.dart';

class RestaurantScreen extends ConsumerStatefulWidget {
  const RestaurantScreen({super.key});

  @override
  ConsumerState<RestaurantScreen> createState() => _RestaurantScreenState();
}

class _RestaurantScreenState extends ConsumerState<RestaurantScreen> {
  final ScrollController _scrollController = ScrollController();

  void _scrollListener() {
    // 현재 위치가 최대 길이보다 조금 덜되는 위치까지 왔다면 새로운 데이터를 추가 요청.
    if (_scrollController.offset > _scrollController.position.maxScrollExtent - 300) {
      debugPrint('---ScrollListener---');
      ref.read(restaurantProvider.notifier).paginate(
            fetchMore: true,
          );
    }
  }

  @override
  void initState() {
    _scrollController.addListener(_scrollListener);
    super.initState();
  }

  @override
  void dispose() {
    _scrollController
      ..removeListener(_scrollListener)
      ..dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final restaurantState = ref.watch(restaurantProvider);

    if (restaurantState is CursorPaginationLoadingState) {
      return const Center(
        child: CircularProgressIndicator(),
      );
    } else if (restaurantState is CursorPaginationErrorState) {
      return Center(
        child: Text(restaurantState.message),
      );
    }

    // CursorPagination.
    // CursorPaginationFetchingMore.
    // CursorPaginationRefetching.
    else {
      final value = (restaurantState as CursorPaginationModel).data;

      return Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        child: ListView.separated(
          controller: _scrollController,
          itemCount: value.length,
          separatorBuilder: (context, index) => const SizedBox(height: 20),
          itemBuilder: (context, index) {
            final model = value[index];
            return GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => RastaurantDetailScreen(
                      id: model.id,
                      name: model.name,
                    ),
                  ),
                );
              },
              child: RastaurantCard.fromModel(
                model: model,
              ),
            );
          },
        ),
      );
    }
  }
}
