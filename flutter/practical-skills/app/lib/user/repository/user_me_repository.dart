import 'package:dio/dio.dart' hide Headers;
import 'package:practical_skills/user/model/basket_item_model.dart';
import 'package:practical_skills/user/model/path_basket_body.dart';
import 'package:retrofit/retrofit.dart';

import '../model/user_model.dart';

part 'user_me_repository.g.dart';

@RestApi()
abstract class UserMeRepository {
  factory UserMeRepository(Dio dio, {String baseUrl}) = _UserMeRepository;

  @GET('/')
  @Headers({
    'accessToken': true,
  })
  Future<UserModel> getMe();

  @GET('/basket')
  @Headers({
    'accessToken': true,
  })
  Future<List<BasketItemModel>> getBasket();

  @PATCH('/basket')
  @Headers({
    'accessToken': true,
  })
  Future<List<BasketItemModel>> patchBasket({
    @Body() required PathBasketBody body,
  });
}
