import 'package:flutter/material.dart';
import 'package:image_search_app/data/pixabay_api.dart';
import 'package:image_search_app/ui/home_screen.dart';
import 'package:image_search_app/ui/home_view_model.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    const MyApp(),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Provider(
        create: (_) => HomeViewModel(repository: PixabayApi()),
        child: const HomeScreen(),
      ),
    );
  }
}
