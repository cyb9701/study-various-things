import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:practical_skills/common/component/pagination_list_view.dart';
import 'package:practical_skills/restaurant/model/restaurant_model.dart';
import 'package:practical_skills/restaurant/provider/restaurant_provider.dart';
import 'package:practical_skills/restaurant/view/restaurant_detail_screen.dart';

import '../component/restaurant_card.dart';

class RestaurantScreen extends StatelessWidget {
  const RestaurantScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return PaginationListView<RestaurantModel>(
      provider: restaurantProvider,
      itemBuilder: <RestaurantModel>(BuildContext context, index, model) {
        return GestureDetector(
          onTap: () {
            context.goNamed(
              RestaurantDetailScreen.routeName,
              pathParameters: {
                'rid': model.id,
              },
            );
          },
          child: RastaurantCard.fromModel(
            model: model,
          ),
        );
      },
    );
  }
}
