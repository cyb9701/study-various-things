import 'dart:async';
import 'dart:collection';

import 'package:flutter/material.dart';

import '../../domain_layer/repository/photo_api_repository.dart';
import '../../domain_layer/model/photo.dart';

class HomeViewModel with ChangeNotifier {
  final PhotoApiRepository repository;

  HomeViewModel({required this.repository});

  List<Photo> _photos = [];

  UnmodifiableListView<Photo> get photos => UnmodifiableListView(_photos);

  Future<void> fetch(String query) async {
    final result = await repository.fetch(query);
    _photos = result;
    notifyListeners();
  }
}
