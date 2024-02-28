import 'dart:async';
import 'dart:collection';

import 'package:flutter/material.dart';
import 'package:image_search_app/presentation_layer/home/home_state.dart';
import 'package:image_search_app/presentation_layer/home/home_ui_event.dart';

import '../../data_layer/data_sorce/result.dart';
import '../../domain_layer/model/photo.dart';
import '../../domain_layer/repository/photo_api_repository.dart';

class HomeViewModel with ChangeNotifier {
  final PhotoApiRepository repository;

  HomeViewModel({required this.repository});

  HomeState _state = const HomeState(photos: [], isLoading: false);

  HomeState get state => _state;

  UnmodifiableListView<Photo> get photos => UnmodifiableListView(_state.photos);

  final _eventController = StreamController<HomeUiEvent>();
  Stream<HomeUiEvent> get eventStream => _eventController.stream;

  Future<void> fetch(String query) async {
    _state = _state.copyWith(isLoading: true);
    notifyListeners();

    final Result<List<Photo>> result = await repository.fetch(query);

    switch (result) {
      case Success(data: List<Photo> data):
        _state = _state.copyWith(photos: data);
      case Error(message: String message):
        _eventController.add(HomeUiEvent.showSnackBar(message));
    }

    _state = _state.copyWith(isLoading: false);
    notifyListeners();
  }
}
