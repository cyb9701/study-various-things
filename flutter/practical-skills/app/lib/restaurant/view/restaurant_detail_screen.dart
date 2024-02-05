import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/layout/default_layout.dart';
import 'package:practical_skills/restaurant/model/restaurant_detail_model.dart';
import 'package:practical_skills/restaurant/model/restaurant_product_model.dart';

import '../../product/component/product_card.dart';
import '../../rating/component/rating_card.dart';
import '../component/restaurant_card.dart';
import '../model/restaurant_model.dart';
import '../provider/restaurant_provider.dart';

class RastaurantDetailScreen extends ConsumerStatefulWidget {
  final String id;
  final String name;

  const RastaurantDetailScreen({
    super.key,
    required this.id,
    required this.name,
  });

  @override
  ConsumerState<RastaurantDetailScreen> createState() => _RastaurantDetailScreenState();
}

class _RastaurantDetailScreenState extends ConsumerState<RastaurantDetailScreen> {
  @override
  void initState() {
    ref.read(restaurantProvider.notifier).getDetail(id: widget.id);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final restaurantDetailState = ref.watch(restaurantDetailProvider(widget.id));

    if (restaurantDetailState == null) {
      return const DefaultLayout(
        child: Center(
          child: CircularProgressIndicator(),
        ),
      );
    }

    return DefaultLayout(
      title: widget.name,
      child: CustomScrollView(
        slivers: [
          _renderTop(model: restaurantDetailState),
          if (restaurantDetailState is RestaurantDetailModel) ...[
            _renderLabel(),
            _renderProducts(products: restaurantDetailState.products),
          ] else
            SliverPadding(
              padding: const EdgeInsets.symmetric(vertical: 16),
              sliver: SliverToBoxAdapter(
                child: Container(
                  height: 200,
                  color: Colors.grey.withOpacity(0.5),
                ),
              ),
            ),
          const SliverPadding(
            padding: EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            sliver: SliverToBoxAdapter(
              child: RatingCard(
                avatarImage: AssetImage('assets/img/logo/codefactory_logo.png'),
                images: [],
                rating: 4,
                email: 'email',
                content:
                    'content contentcontent content content content content content content content content content content content ',
              ),
            ),
          )
        ],
      ),
    );
  }

  Widget _renderTop({
    required RestaurantModel model,
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
