import 'package:dio/dio.dart' hide Headers;
import 'package:practical_skills/common/model/cursor_pagination_model.dart';
import 'package:practical_skills/common/model/pagination_params.dart';
import 'package:practical_skills/common/repository/base_pagination_repository.dart';
import 'package:practical_skills/order/model/post_order_body.dart';
import 'package:retrofit/retrofit.dart';

import '../model/order_model.dart';

part 'order_repository.g.dart';

@RestApi()
abstract class OrderRepository implements BasePaginationRepositoryInterface<OrderModel> {
  factory OrderRepository(Dio dio, {String baseUrl}) = _OrderRepository;

  @override
  @GET('/')
  @Headers({
    'accessToken': true,
  })
  Future<CursorPagination<OrderModel>> paginate({
    @Queries() PaginationParams? paginationParams = const PaginationParams(),
  });

  @POST('/')
  @Headers({
    'accessToken': true,
  })
  Future<OrderModel> postOrder({
    @Body() required PostOrderBody body,
  });
}
