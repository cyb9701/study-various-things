import 'dart:async';

import 'package:image_search_app/data/api.dart';

import '../model/photo.dart';

class HomeViewModel {
  final PixabayApi pixabayApi;

  HomeViewModel({required this.pixabayApi});

  final _photoStreamController = StreamController<List<Photo>>()..add([]);
  Stream<List<Photo>> get photoStream => _photoStreamController.stream;

  Future<void> fetch(String query) async {
    final result = await pixabayApi.fetch(query);
    _photoStreamController.add(result);
  }
}
