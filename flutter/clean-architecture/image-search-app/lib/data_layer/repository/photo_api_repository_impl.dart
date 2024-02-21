import 'dart:convert';

import 'package:image_search_app/domain_layer/repository/photo_api_repository.dart';

import '../../domain_layer/model/photo.dart';
import '../data_sorce/pixabay_api.dart';

class PhotoApiRepositoryImpl implements PhotoApiRepository {
  final PixabayApi api;

  PhotoApiRepositoryImpl(this.api);

  @override
  Future<List<Photo>> fetch(String query) async {
    final response = await api.fetch(query);

    final jsonResponse = jsonDecode(response.body);
    Iterable hits = jsonResponse['hits'];
    return hits.map((e) => Photo.fromJson(e)).toList();
  }
}
