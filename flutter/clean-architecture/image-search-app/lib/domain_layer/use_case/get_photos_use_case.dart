import 'dart:math';

import 'package:image_search_app/data_layer/data_sorce/result.dart';

import '../model/photo.dart';
import '../repository/photo_api_repository.dart';

class GetPhotosUseCase {
  final PhotoApiRepository repository;

  GetPhotosUseCase({required this.repository});

  // Future<Result<List<Photo>>> call(String query) async {
  Future<Result<List<Photo>>> execute(String query) async {
    final Result<List<Photo>> result = await repository.fetch(query);

    switch (result) {
      case Success(data: List<Photo> data):
        final photos = data.sublist(0, min(5, data.length));
        return Result.success(photos);
      case Error(message: String message):
        return Result.error(message);
    }
  }
}
