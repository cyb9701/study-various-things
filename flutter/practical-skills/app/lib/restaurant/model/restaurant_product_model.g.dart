// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'restaurant_product_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

RestaurantProductModel _$RestaurantProductModelFromJson(Map<String, dynamic> json) =>
    RestaurantProductModel(
      id: json['id'] as String,
      name: json['name'] as String,
      imgUrl: DataUtils.pathToUrl(json['imgUrl'] as String),
      detail: json['detail'] as String,
      price: json['price'] as int,
    );
