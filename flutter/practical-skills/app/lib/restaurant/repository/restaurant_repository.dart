import 'package:dio/dio.dart' hide Headers;
import 'package:practical_skills/common/model/cursor_pagination_model.dart';
import 'package:practical_skills/common/model/pagination_params.dart';
import 'package:practical_skills/common/repository/base_pagination_repository.dart';
import 'package:retrofit/retrofit.dart';

import '../model/restaurant_detail_model.dart';
import '../model/restaurant_model.dart';

part 'restaurant_repository.g.dart';

@RestApi()
abstract class RestaurantRepository implements BasePaginationRepositoryInterface<RestaurantModel> {
  factory RestaurantRepository(Dio dio, {String baseUrl}) = _RestaurantRepository;

  @override
  @GET('/')
  @Headers({
    'accessToken': true,
  })
  Future<CursorPagination<RestaurantModel>> paginate({
    @Queries() PaginationParams? paginationParams = const PaginationParams(),
  });

  @GET('/{id}')
  @Headers({
    'accessToken': true,
  })
  Future<RestaurantDetailModel> getRestaurantDetail({
    @Path('id') required String rid,
  });
}
