import 'package:flutter/material.dart';
import 'package:practical_skills/common/layout/default_layout.dart';
import 'package:practical_skills/product/component/product_card.dart';

import '../component/restaurant_card.dart';

class RastaurantDetailScreen extends StatelessWidget {
  const RastaurantDetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultLayout(
      title: '123',
      child: Column(
        children: [
          RastaurantCard(
            image: Image.asset(
              'assets/img/food/ddeok_bok_gi.jpg',
            ),
            name: 'name',
            tags: const ['tags'],
            ratingsCount: 1,
            deliveryTime: 2,
            deliveryFee: 3,
            ratings: 4,
            isDetail: true,
            detail: '맛있는 떡볶이',
          ),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 16),
            child: ProductCard(),
          ),
        ],
      ),
    );
  }
}
