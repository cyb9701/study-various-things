import 'package:json_annotation/json_annotation.dart';

part 'path_basket_body.g.dart';

@JsonSerializable()
class PathBasketBody {
  final String productId;
  final int count;

  PathBasketBody({
    required this.productId,
    required this.count,
  });

  Map<String, dynamic> toJson() => _$PathBasketBodyToJson(this);
}
