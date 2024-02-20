import 'package:flutter/material.dart';
import 'package:image_search_app/data/api.dart';

class PhotoProvider extends InheritedWidget {
  final PixabayApi pixabayApi;

  const PhotoProvider({
    super.key,
    required super.child,
    required this.pixabayApi,
  });

  static PhotoProvider of(BuildContext context) {
    final PhotoProvider? result = context.dependOnInheritedWidgetOfExactType<PhotoProvider>();
    assert(result != null, 'No PixabayApi found in context');
    return result!;
  }

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) {
    return false;
  }
}
