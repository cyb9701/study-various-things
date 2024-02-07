import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/component/pagination_list_view.dart';
import 'package:practical_skills/order/component/order_card.dart';
import 'package:practical_skills/order/provider/order_provider.dart';

class OrderScreen extends ConsumerWidget {
  const OrderScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return PaginationListView(
      provider: orderProvider,
      itemBuilder: <OrderModle>(context, index, model) {
        return OrderCard.fromModel(model: model);
      },
    );
  }
}
