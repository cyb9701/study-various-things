import 'package:flutter/material.dart';
import 'package:practical_skills/order/model/order_model.dart';

class OrderCard extends StatelessWidget {
  final DateTime orderDate;
  final Image image;
  final String name;
  final String productsDetail;
  final int price;

  const OrderCard({
    super.key,
    required this.orderDate,
    required this.image,
    required this.name,
    required this.productsDetail,
    required this.price,
  });

  factory OrderCard.fromModel({
    required OrderModel model,
  }) {
    final productsDetail = model.products.length == 1
        ? model.products.first.product.name
        : '${model.products.first.product.name} 외 ${model.products.length - 1}';

    return OrderCard(
      orderDate: model.createdAt,
      image: Image.network(
        model.restaurant.thumbUrl,
        width: 50,
        height: 50,
        fit: BoxFit.cover,
      ),
      name: model.restaurant.name,
      productsDetail: productsDetail,
      price: model.totalPrice,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(bottom: 8),
          child: Text(
            '${orderDate.year}.${orderDate.month.toString().padLeft(2, '0')}.${orderDate.day.toString().padLeft(2, '0')} 주문완료',
          ),
        ),
        Row(
          children: [
            Padding(
              padding: const EdgeInsets.only(right: 8),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(16),
                child: image,
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  name,
                ),
                Text(
                  '$productsDetail $price원',
                  style: const TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w300,
                  ),
                ),
              ],
            )
          ],
        )
      ],
    );
  }
}
