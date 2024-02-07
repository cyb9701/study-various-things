import 'package:collection/collection.dart';
import 'package:debounce_throttle/debounce_throttle.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/product/model/product_model.dart';
import 'package:practical_skills/user/model/basket_item_model.dart';
import 'package:practical_skills/user/model/path_basket_body.dart';
import 'package:practical_skills/user/provider/user_me_repository_provider.dart';
import 'package:practical_skills/user/repository/user_me_repository.dart';

final basketProvider = StateNotifierProvider<BasketStateNotifier, List<BasketItemModel>>((ref) {
  final repository = ref.watch(userMeRepositoryProvider);
  return BasketStateNotifier(repository: repository);
});

class BasketStateNotifier extends StateNotifier<List<BasketItemModel>> {
  final UserMeRepository repository;

  final updateBasketDebounce = Debouncer(
    const Duration(seconds: 1),
    initialValue: null,
    checkEquality: false,
  );
  BasketStateNotifier({required this.repository}) : super([]) {
    updateBasketDebounce.values.listen((event) {
      _patchBasket();
    });
  }

  Future<void> _patchBasket() async {
    await repository.patchBasket(
      body: PatchBasketBody(
        basket: state
            .map(
              (e) => PatchBasketBodyBasket(
                productId: e.product.id,
                count: e.count,
              ),
            )
            .toList(),
      ),
    );
  }

  Future<void> addToBasket({
    required ProductModel product,
  }) async {
    final exists = state.firstWhereOrNull((e) => e.product.id == product.id) != null;

    // 1) 아직 장바구니에 해당되는 상품이 없다면 장바구니에 상품을 추가한다.
    if (!exists) {
      state = [
        ...state,
        BasketItemModel(
          product: product,
          count: 1,
        ),
      ];
    }

    // 2) 만약에 이미 들어있다면 장바구니에 있는 값에 +1을 한다.
    else {
      state = state
          .map(
            (e) => e.product.id == product.id ? e.copyWith(count: e.count + 1) : e,
          )
          .toList();
    }

    // optimistic response : 긍정적 응답
    // 응답이 성공할거라고 가정하고 상태를 먼저 업데이트함.
    updateBasketDebounce.setValue(null);
  }

  Future<void> removeFromBasket({
    required ProductModel product,

    // true이면 개수 상관 없이 아예 삭제한다.
    bool isDelete = false,
  }) async {
    final exists = state.firstWhereOrNull((e) => e.product.id == product.id) != null;

    // 1) 장바구니에 상품이 존재할 때
    // 1-1) 상품의 카운트가 1보다 크면 -1한다.
    // 1-2) 상품의 카운트가 1이면 삭제한다.
    if (exists) {
      final existingProduct = state.firstWhere((e) => e.product.id == product.id);
      if (existingProduct.count > 1 && !isDelete) {
        state = state
            .map(
              (e) => e.product.id == product.id ? e.copyWith(count: e.count - 1) : e,
            )
            .toList();
      } else {
        state = state.where((e) => e.product.id != product.id).toList();
      }
    }

    // 2) 상품이 존재하지 않을 때 즉시 함수를 반환하고 아무것도 하지 않는다.
    else {
      return;
    }

    updateBasketDebounce.setValue(null);
  }
}
