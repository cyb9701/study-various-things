import 'dart:convert';

import 'package:image_search_app/data_layer/data_sorce/result.dart';
import 'package:image_search_app/domain_layer/repository/photo_api_repository.dart';

import '../../domain_layer/model/photo.dart';
import '../data_sorce/pixabay_api.dart';

class PhotoApiRepositoryImpl implements PhotoApiRepository {
  final PixabayApi api;

  PhotoApiRepositoryImpl(this.api);

  @override
  Future<Result<List<Photo>>> fetch(String query) async {
    try {
      final response = await api.fetch(query);
      final json = jsonDecode(response.body);
      Iterable hits = json['hits'];
      final List<Photo> data = hits.map((e) => Photo.fromJson(e)).toList();

      return Result.success(data);
    } catch (e) {
      return Result.error(e.toString());
    }
  }
}
