import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/restaurant/repository/restaruant_repository_provider.dart';
import 'package:practical_skills/restaurant/view/restaurant_detail_screen.dart';

import '../../common/model/cursor_pagination_model.dart';
import '../component/restaurant_card.dart';

class RestaurantScreen extends ConsumerWidget {
  const RestaurantScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: FutureBuilder(
        future: ref.read(restaurantRepositoryProvider).paginate(),
        builder: (context, AsyncSnapshot<CursorPaginationModel> snapshot) {
          if (snapshot.hasError) {
            return const Icon(
              Icons.error,
              color: Colors.red,
            );
          } else if (!snapshot.hasData) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }

          final items = snapshot.data!.data;
          return ListView.separated(
            itemCount: items.length,
            separatorBuilder: (context, index) => const SizedBox(height: 20),
            itemBuilder: (context, index) {
              final model = items[index];
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
          );
        },
      ),
    );
  }
}
