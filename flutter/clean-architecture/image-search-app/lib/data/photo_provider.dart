// import 'package:flutter/material.dart';
// import 'package:image_search_app/ui/home_view_model.dart';

// class PhotoProvider extends InheritedWidget {
//   final HomeViewModel homeViewModel;

//   const PhotoProvider({
//     super.key,
//     required super.child,
//     required this.homeViewModel,
//   });

//   static PhotoProvider of(BuildContext context) {
//     final PhotoProvider? result = context.dependOnInheritedWidgetOfExactType<PhotoProvider>();
//     assert(result != null, 'No PixabayApi found in context');
//     return result!;
//   }

//   @override
//   bool updateShouldNotify(covariant InheritedWidget oldWidget) {
//     return true;
//   }
// }
