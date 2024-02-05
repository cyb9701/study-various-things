import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/restaurant/provider/restaurant_provider.dart';
import 'package:practical_skills/restaurant/view/restaurant_detail_screen.dart';

import '../../common/model/cursor_pagination_model.dart';
import '../component/restaurant_card.dart';

class RestaurantScreen extends ConsumerWidget {
  const RestaurantScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final restaurantState = ref.watch(restaurantProvider);

    if (restaurantState is CursorPaginationLoadingState) {
      return const Center(
        child: CircularProgressIndicator(),
      );
    } else if (restaurantState is CursorPaginationErrorState) {
      return Center(
        child: Text(restaurantState.message),
      );
    } else {
      final value = (restaurantState as CursorPaginationModel).data;

      return Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        child: ListView.separated(
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
