import 'package:flutter/material.dart';
import 'package:practical_skills/restaurant/component/restaurant_card.dart';

class RestaurantScreen extends StatelessWidget {
  const RestaurantScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: RastaurantCard(
        image: Image.asset(
          'assets/img/food/ddeok_bok_gi.jpg',
          fit: BoxFit.cover,
        ),
        name: '불타는 떡볶이',
        tags: const ['떡볶이', '치즈', '매운맛'],
        ratingCount: 100,
        deliveryTime: 15,
        deliveryFee: 2000,
        ratings: 4.52,
      ),
    );
  }
}
