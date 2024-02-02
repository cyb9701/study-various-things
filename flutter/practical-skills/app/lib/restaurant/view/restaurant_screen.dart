import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:practical_skills/common/const/data.dart';
import 'package:practical_skills/restaurant/view/restaurant_detail_screen.dart';

import '../../common/dio/dio.dart';
import '../../common/model/cursor_pagination_model.dart';
import '../component/restaurant_card.dart';
import '../model/restaurant_model.dart';
import '../repository/restaurant_repository.dart';

class RestaurantScreen extends StatelessWidget {
  const RestaurantScreen({super.key});

  Future<List<RestaurantModel>> _paginateRestaurant() async {
    final dio = Dio();

    dio.interceptors.add(
      CustomInterceptor(
        storage: storage,
      ),
    );

    final repository = RestaurantRepository(dio, baseUrl: '$ip/restaurant');
    final CursorPaginationModel<RestaurantModel> result = await repository.paginate();
    return result.data;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: FutureBuilder(
        future: _paginateRestaurant(),
        builder: (context, AsyncSnapshot<List<RestaurantModel>> snapshot) {
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

          final items = snapshot.data!;
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
