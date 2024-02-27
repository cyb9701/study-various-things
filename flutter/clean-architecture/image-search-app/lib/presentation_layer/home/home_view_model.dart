import 'dart:async';
import 'dart:collection';

import 'package:flutter/material.dart';
import 'package:image_search_app/presentation_layer/home/home_ui_event.dart';

import '../../data_layer/data_sorce/result.dart';
import '../../domain_layer/model/photo.dart';
import '../../domain_layer/repository/photo_api_repository.dart';

class HomeViewModel with ChangeNotifier {
  final PhotoApiRepository repository;

  HomeViewModel({required this.repository});

  List<Photo> _photos = [];

  UnmodifiableListView<Photo> get photos => UnmodifiableListView(_photos);

  final _eventController = StreamController<HomeUiEvent>();
  Stream<HomeUiEvent> get eventStream => _eventController.stream;

  Future<void> fetch(String query) async {
    final Result<List<Photo>> result = await repository.fetch(query);

    if (result is Success) {
      final photos = (result as Success).data;
      _photos = photos;
    } else {
      final message = (result as Error).message;
      _eventController.add(HomeUiEvent.showSnackBar(message));
    }

    notifyListeners();
  }
}
