import 'package:dio/dio.dart' hide Headers;
import 'package:retrofit/retrofit.dart';

import '../model/restaurant_detail_model.dart';

part 'restaurant_repository.g.dart';

@RestApi()
abstract class RestaurantRepository {
  factory RestaurantRepository(Dio dio, {String baseUrl}) = _RestaurantRepository;

  // @GET('/')
  // paginate();

  @GET('/{id}')
  @Headers({
    'accessToken': true,
  })
  Future<RestaurantDetailModel> getRestaurantDetail({
    @Path('id') required String rid,
  });
}
