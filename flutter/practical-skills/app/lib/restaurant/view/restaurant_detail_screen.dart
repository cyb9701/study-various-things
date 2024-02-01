import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:practical_skills/common/const/data.dart';
import 'package:practical_skills/common/layout/default_layout.dart';

import '../../product/component/product_card.dart';
import '../component/restaurant_card.dart';
import '../model/restaurant_detail_model.dart';

class RastaurantDetailScreen extends StatelessWidget {
  final String id;
  final String name;

  const RastaurantDetailScreen({
    super.key,
    required this.id,
    required this.name,
  });

  Future<Map<String, dynamic>> _getRestaurantDetail() async {
    final dio = Dio();
    final accessToken = await storage.read(key: accessTokenKey);

    final response = await dio.get(
      '$ip/restaurant/$id',
      options: Options(
        headers: {
          'authorization': 'Bearer $accessToken',
        },
      ),
    );

    return response.data;
  }

  @override
  Widget build(BuildContext context) {
    return DefaultLayout(
      title: name,
      child: FutureBuilder(
        future: _getRestaurantDetail(),
        builder: (contet, AsyncSnapshot<Map<String, dynamic>> snapshot) {
          if (!snapshot.hasData) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
          final item = RestaurantDetailModel.fromJson(snapshot.data!);
          return CustomScrollView(
            slivers: [
              _renderTop(model: item),
              _renderLabel(),
              _renderProducts(),
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
