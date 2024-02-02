import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/const/data.dart';
import 'package:practical_skills/common/layout/default_layout.dart';
import 'package:practical_skills/restaurant/model/restaurant_product_model.dart';
import 'package:practical_skills/restaurant/repository/restaurant_repository.dart';

import '../../common/dio/dio_provider.dart';
import '../../product/component/product_card.dart';
import '../component/restaurant_card.dart';
import '../model/restaurant_detail_model.dart';

class RastaurantDetailScreen extends ConsumerWidget {
  final String id;
  final String name;

  const RastaurantDetailScreen({
    super.key,
    required this.id,
    required this.name,
  });

  Future<RestaurantDetailModel> _getRestaurantDetail(WidgetRef ref) async {
    final dio = ref.read(dioProvider);

    final repository = RestaurantRepository(dio, baseUrl: '$ip/restaurant');
    final result = await repository.getRestaurantDetail(rid: id);
    return result;
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return DefaultLayout(
      title: name,
      child: FutureBuilder(
        future: _getRestaurantDetail(ref),
        builder: (contet, AsyncSnapshot<RestaurantDetailModel> snapshot) {
          if (!snapshot.hasData) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
          return CustomScrollView(
            slivers: [
              _renderTop(model: snapshot.data!),
              _renderLabel(),
              _renderProducts(products: snapshot.data!.products),
            ],
          );
        },
      ),
    );
  }

  Widget _renderTop({
    required RestaurantDetailModel model,
  }) {
    return SliverToBoxAdapter(
      child: RastaurantCard.fromModel(
        model: model,
        isDetail: true,
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

  Widget _renderProducts({
    required List<RestaurantProductModel> products,
  }) {
    return SliverPadding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      sliver: SliverList(
        delegate: SliverChildBuilderDelegate(
          (context, index) {
            return Padding(
              padding: const EdgeInsets.only(top: 16),
              child: ProductCard.fromModel(model: products[index]),
            );
          },
          childCount: products.length,
        ),
      ),
    );
  }
}
