import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:practical_skills/product/component/product_card.dart';
import 'package:practical_skills/product/model/product_model.dart';
import 'package:practical_skills/product/provider/product_provider.dart';

import '../../common/component/pagination_list_view.dart';
import '../../restaurant/view/restaurant_detail_screen.dart';

class ProductScreen extends StatelessWidget {
  const ProductScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return PaginationListView<ProductModel>(
      provider: productProvider,
      itemBuilder: <ProductModel>(BuildContext context, index, model) {
        return GestureDetector(
          onTap: () {
            context.goNamed(
              RestaurantDetailScreen.routeName,
              pathParameters: {
                'rid': model.restaurant.id,
              },
            );
          },
          child: ProductCard.fromProductModel(
            model: model,
          ),
        );
      },
    );
  }
}
