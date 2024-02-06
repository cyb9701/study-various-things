import 'package:badges/badges.dart' as badges;
import 'package:badges/badges.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/const/colors.dart';
import 'package:practical_skills/common/layout/default_layout.dart';
import 'package:practical_skills/common/model/cursor_pagination_model.dart';
import 'package:practical_skills/product/model/product_model.dart';
import 'package:practical_skills/restaurant/model/restaurant_detail_model.dart';
import 'package:practical_skills/restaurant/model/restaurant_product_model.dart';
import 'package:practical_skills/restaurant/provider/restaurant_rating_provider.dart';
import 'package:practical_skills/user/provider/basket_provider.dart';

import '../../common/utils/pagination_utils.dart';
import '../../product/component/product_card.dart';
import '../../rating/component/rating_card.dart';
import '../../rating/model/rating_model.dart';
import '../component/restaurant_card.dart';
import '../model/restaurant_model.dart';
import '../provider/restaurant_provider.dart';

class RestaurantDetailScreen extends ConsumerStatefulWidget {
  final String id;

  const RestaurantDetailScreen({
    super.key,
    required this.id,
  });

  static const routeName = 'restaurantDetail';

  @override
  ConsumerState<RestaurantDetailScreen> createState() => _RastaurantDetailScreenState();
}

class _RastaurantDetailScreenState extends ConsumerState<RestaurantDetailScreen> {
  final ScrollController _scrollController = ScrollController();

  void _scrollListener() {
    PagiantionUtils.paginate(
      controller: _scrollController,
      provider: ref.read(restaurantRatingProvider(widget.id).notifier),
    );
  }

  @override
  void initState() {
    _scrollController.addListener(_scrollListener);
    ref.read(restaurantProvider.notifier).getDetail(id: widget.id);
    super.initState();
  }

  @override
  void dispose() {
    _scrollController
      ..removeListener(_scrollListener)
      ..dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final restaurantDetailState = ref.watch(restaurantDetailProvider(widget.id));
    final ratingState = ref.watch(restaurantRatingProvider(widget.id));

    if (restaurantDetailState == null) {
      return const DefaultLayout(
        child: Center(
          child: CircularProgressIndicator(),
        ),
      );
    }

    return DefaultLayout(
      title: restaurantDetailState.name,
      floatingActionButton: const _BasketFloatingButton(),
      child: CustomScrollView(
        controller: _scrollController,
        slivers: [
          _renderTop(model: restaurantDetailState),
          if (restaurantDetailState is RestaurantDetailModel) ...[
            _renderLabel(),
            _renderProducts(
              products: restaurantDetailState.products,
              restaurant: restaurantDetailState,
            ),
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
          if (ratingState is CursorPagination<RatingModel>)
            _renderRatings(models: ratingState.data),
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
    required RestaurantModel restaurant,
  }) {
    return SliverPadding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      sliver: SliverList(
        delegate: SliverChildBuilderDelegate(
          (context, index) {
            final product = products[index];

            return InkWell(
              onTap: () {
                ref.read(basketProvider.notifier).addToBasket(
                      product: ProductModel(
                        id: product.id,
                        name: product.name,
                        detail: product.detail,
                        imgUrl: product.imgUrl,
                        price: product.price,
                        restaurant: restaurant,
                      ),
                    );
              },
              child: Padding(
                padding: const EdgeInsets.only(top: 16),
                child: ProductCard.fromRestaurantProductModel(model: product),
              ),
            );
          },
          childCount: products.length,
        ),
      ),
    );
  }

  Widget _renderRatings({
    required List<RatingModel> models,
  }) {
    return SliverPadding(
      padding: const EdgeInsets.all(16),
      sliver: SliverList(
        delegate: SliverChildBuilderDelegate(
          (context, index) => Padding(
            padding: const EdgeInsets.only(bottom: 16),
            child: RatingCard.fromModel(model: models[index]),
          ),
          childCount: models.length,
        ),
      ),
    );
  }
}

class _BasketFloatingButton extends ConsumerWidget {
  const _BasketFloatingButton();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final basket = ref.watch(basketProvider);
    return FloatingActionButton(
      onPressed: () {},
      backgroundColor: primaryColor,
      child: badges.Badge(
        showBadge: basket.isNotEmpty,
        badgeContent: Text(
          basket.fold<int>(0, (previousValue, element) => previousValue + element.count).toString(),
          style: const TextStyle(
            color: primaryColor,
            fontSize: 10,
          ),
        ),
        badgeStyle: const BadgeStyle(
          badgeColor: Colors.white,
        ),
        child: const Icon(Icons.shopping_basket_rounded),
      ),
    );
  }
}
