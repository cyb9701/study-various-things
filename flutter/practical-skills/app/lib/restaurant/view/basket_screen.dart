import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:practical_skills/common/const/colors.dart';
import 'package:practical_skills/common/layout/default_layout.dart';
import 'package:practical_skills/order/provider/order_provider.dart';
import 'package:practical_skills/order/view/order_done_screen.dart';
import 'package:practical_skills/product/component/product_card.dart';
import 'package:practical_skills/user/provider/basket_provider.dart';

class BasketScreen extends ConsumerWidget {
  const BasketScreen({super.key});

  static const routeName = 'basket';

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final baskets = ref.watch(basketProvider);

    if (baskets.isEmpty) {
      return const DefaultLayout(
        title: '장바구니',
        child: Center(
          child: Text(
            '장바구니가 비어있습니다',
          ),
        ),
      );
    }

    final productsTotal = baskets.fold<int>(
      0,
      (previousValue, element) => previousValue + (element.product.price * element.count),
    );

    final deliveryFee = baskets.first.product.restaurant.deliveryFee;

    return DefaultLayout(
      title: '장바구니',
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        child: Column(
          children: [
            Expanded(
              child: ListView.separated(
                itemCount: baskets.length,
                separatorBuilder: (context, index) => const Divider(
                  height: 48,
                ),
                itemBuilder: (context, index) {
                  final basket = baskets[index];
                  return ProductCard.fromProductModel(
                    model: basket.product,
                    onSubtract: () {
                      ref.read(basketProvider.notifier).removeFromBasket(
                            product: basket.product,
                          );
                    },
                    onAdd: () {
                      ref.read(basketProvider.notifier).addToBasket(
                            product: basket.product,
                          );
                    },
                  );
                },
              ),
            ),
            SafeArea(
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        '장바구니 금액',
                        style: TextStyle(
                          color: bodyTextColor,
                        ),
                      ),
                      Text(
                        '$productsTotal원',
                      ),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        '배달비',
                        style: TextStyle(
                          color: bodyTextColor,
                        ),
                      ),
                      Text(
                        '$deliveryFee원',
                      ),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        '총액',
                        style: TextStyle(
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      Text(
                        '${productsTotal + deliveryFee}',
                      ),
                    ],
                  ),
                  Container(
                    margin: const EdgeInsets.only(top: 8),
                    width: double.infinity,
                    child: ElevatedButton(
                      style: ButtonStyle(
                        backgroundColor: MaterialStateProperty.all(primaryColor),
                      ),
                      onPressed: () {
                        ref.read(orderProvider.notifier).postOrder().then((result) {
                          if (result) {
                            context.goNamed(OrderDoneScreen.routeName);
                          } else {
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(
                                content: Text('결제 실패'),
                              ),
                            );
                          }
                        });
                      },
                      child: const Text(
                        '결제하기',
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
