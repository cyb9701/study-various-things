import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/order/model/order_model.dart';
import 'package:practical_skills/order/model/post_order_body.dart';
import 'package:practical_skills/order/provider/order_repository_provider.dart';
import 'package:practical_skills/order/repository/order_repository.dart';
import 'package:practical_skills/user/provider/basket_provider.dart';
import 'package:uuid/uuid.dart';

final orderProvider = StateNotifierProvider<OrderStateNotifier, List<OrderModel>>((ref) {
  final repository = ref.watch(orderRepositoryProvider);
  return OrderStateNotifier(
    ref: ref,
    repository: repository,
  );
});

class OrderStateNotifier extends StateNotifier<List<OrderModel>> {
  final Ref ref;
  final OrderRepository repository;

  OrderStateNotifier({
    required this.ref,
    required this.repository,
  }) : super([]);

  Future<bool> postOrder() async {
    try {
      final basketState = ref.read(basketProvider);

      const uuid = Uuid();
      final id = uuid.v4();

      await repository.postOrder(
        body: PostOrderBody(
          id: id,
          products: basketState
              .map<PostOrderBodyProduct>(
                (e) => PostOrderBodyProduct(
                  productId: e.product.id,
                  count: e.count,
                ),
              )
              .toList(),
          totalPrice: basketState.fold<int>(
            0,
            (previousValue, element) => previousValue + element.product.price * element.count,
          ),
          createdAt: DateTime.now().toString(),
        ),
      );
      return true;
    } catch (_) {
      return false;
    }
  }
}
