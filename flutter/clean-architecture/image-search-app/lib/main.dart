import 'package:flutter/material.dart';
import 'package:image_search_app/data/api.dart';
import 'package:image_search_app/data/photo_provider.dart';
import 'package:image_search_app/ui/home_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: PhotoProvider(
        pixabayApi: PixabayApi(),
        child: const HomeScreen(),
      ),
    );
  }
}
