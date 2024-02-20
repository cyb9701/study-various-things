import 'dart:async';

import 'package:flutter/material.dart';
import 'package:image_search_app/data/api.dart';

import '../model/photo.dart';

class PhotoProvider extends InheritedWidget {
  final PixabayApi pixabayApi;

  PhotoProvider({
    super.key,
    required super.child,
    required this.pixabayApi,
  });

  final _photoStreamController = StreamController<List<Photo>>()..add([]);
  Stream<List<Photo>> get photoStream => _photoStreamController.stream;

  static PhotoProvider of(BuildContext context) {
    final PhotoProvider? result = context.dependOnInheritedWidgetOfExactType<PhotoProvider>();
    assert(result != null, 'No PixabayApi found in context');
    return result!;
  }

  Future<void> fetch(String query) async {
    final result = await pixabayApi.fetch(query);
    _photoStreamController.add(result);
  }

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) {
    return false;
  }
}
