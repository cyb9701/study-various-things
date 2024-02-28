import 'dart:async';
import 'dart:collection';

import 'package:flutter/material.dart';
import 'package:image_search_app/presentation_layer/home/home_state.dart';
import 'package:image_search_app/presentation_layer/home/home_ui_event.dart';

import '../../data_layer/data_sorce/result.dart';
import '../../domain_layer/model/photo.dart';
import '../../domain_layer/use_case/get_photos_use_case.dart';

class HomeViewModel with ChangeNotifier {
  final GetPhotosUseCase getPhotosUseCase;

  HomeViewModel({required this.getPhotosUseCase});

  HomeState _state = const HomeState(photos: [], isLoading: false);

  HomeState get state => _state;

  UnmodifiableListView<Photo> get photos => UnmodifiableListView(_state.photos);

  final _eventController = StreamController<HomeUiEvent>();
  Stream<HomeUiEvent> get eventStream => _eventController.stream;

  Future<void> fetch(String query) async {
    _state = _state.copyWith(isLoading: true);
    notifyListeners();

    final Result<List<Photo>> result = await getPhotosUseCase.execute(query);
    // final Result<List<Photo>> result = await getPhotosUseCase.call(query);
    // final Result<List<Photo>> result = await getPhotosUseCase(query);

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
