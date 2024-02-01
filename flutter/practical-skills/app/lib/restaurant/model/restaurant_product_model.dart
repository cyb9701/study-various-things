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
      imgUrl: json['imgUrl'],
      detail: json['detail'],
      price: json['price'],
    );
  }
}
