import 'package:flutter/material.dart';
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
      itemBuilder: <RestaurantModel>(context, index, model) {
        return GestureDetector(
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => RastaurantDetailScreen(
                  id: model.id,
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
  }
}
