import 'package:dio/dio.dart' hide Headers;
import 'package:practical_skills/common/model/cursor_pagination_model.dart';
import 'package:practical_skills/common/model/pagination_params.dart';
import 'package:retrofit/retrofit.dart';

import '../../common/repository/base_pagination_repository.dart';
import '../../rating/model/rating_model.dart';

part 'restaurant_rating_repository.g.dart';

@RestApi()
abstract class RestaurantRatingRepository
    implements BasePaginationRepositoryInterface<RatingModel> {
  factory RestaurantRatingRepository(Dio dio, {String baseUrl}) = _RestaurantRatingRepository;

  @override
  @GET('/')
  @Headers({
    'accessToken': true,
  })
  Future<CursorPaginationModel<RatingModel>> paginate({
    @Queries() PaginationParams? paginationParams = const PaginationParams(),
  });
}
