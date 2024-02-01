import 'package:practical_skills/common/const/data.dart';

class RestaurantProductModel {
  final String id;
  final String name;
  final String imgUrl;
  final String detail;
  final int price;

  RestaurantProductModel({
    required this.id,
    required this.name,
    required this.imgUrl,
    required this.detail,
    required this.price,
  });

  factory RestaurantProductModel.fromJson(Map<String, dynamic> json) {
    return RestaurantProductModel(
      id: json['id'],
      name: json['name'],
      imgUrl: '$ip${json['imgUrl']}',
      detail: json['detail'],
      price: json['price'],
    );
  }
}
