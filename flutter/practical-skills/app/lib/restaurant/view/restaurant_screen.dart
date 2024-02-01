import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:practical_skills/common/const/data.dart';
import 'package:practical_skills/restaurant/view/restaurant_detail_screen.dart';

import '../component/restaurant_card.dart';
import '../model/restaurant_model.dart';

class RestaurantScreen extends StatelessWidget {
  const RestaurantScreen({super.key});

  Future<List> _paginateRestaurant() async {
    final dio = Dio();
    final accessToken = await storage.read(key: accessTokenKey);

    final response = await dio.get(
      '$ip/restaurant',
      options: Options(
        headers: {
          'authorization': 'Bearer $accessToken',
        },
      ),
    );

    return response.data['data'];
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: FutureBuilder(
        future: _paginateRestaurant(),
        builder: (context, AsyncSnapshot<List> snapshot) {
          if (snapshot.hasError) {
            debugPrint(snapshot.error.toString());
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
              final model = RestaurantModel.fromJson(items[index]);
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
