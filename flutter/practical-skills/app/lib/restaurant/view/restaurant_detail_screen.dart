import 'package:flutter/material.dart';
import 'package:practical_skills/common/layout/default_layout.dart';

import '../../product/component/product_card.dart';
import '../component/restaurant_card.dart';

class RastaurantDetailScreen extends StatelessWidget {
  const RastaurantDetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultLayout(
      title: '123',
      child: CustomScrollView(
        slivers: [
          _renderTop(),
          _renderLabel(),
          _renderProducts(),
        ],
      ),
    );
  }

  Widget _renderTop() {
    return SliverToBoxAdapter(
      child: RastaurantCard(
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
    );
  }

  SliverPadding _renderLabel() {
    return const SliverPadding(
      padding: EdgeInsets.symmetric(horizontal: 16),
      sliver: SliverToBoxAdapter(
        child: Text(
          '메뉴',
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w500,
          ),
        ),
      ),
    );
  }

  Widget _renderProducts() {
    return SliverPadding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      sliver: SliverList(
        delegate: SliverChildBuilderDelegate(
          (context, index) {
            return const Padding(
              padding: EdgeInsets.only(top: 16),
              child: ProductCard(),
            );
          },
          childCount: 10,
        ),
      ),
    );
  }
}
