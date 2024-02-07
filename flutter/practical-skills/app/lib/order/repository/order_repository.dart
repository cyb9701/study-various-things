import 'package:dio/dio.dart' hide Headers;
import 'package:practical_skills/order/model/post_order_body.dart';
import 'package:retrofit/retrofit.dart';

import '../model/order_model.dart';

part 'order_repository.g.dart';

@RestApi()
abstract class OrderRepository {
  factory OrderRepository(Dio dio, {String baseUrl}) = _OrderRepository;

  @POST('/')
  @Headers({
    'accessToken': true,
  })
  Future<OrderModel> postOrder({
    @Body() required PostOrderBody body,
  });
}
