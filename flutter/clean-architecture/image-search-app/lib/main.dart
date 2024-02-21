import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:image_search_app/data_layer/data_sorce/pixabay_api.dart';
import 'package:image_search_app/data_layer/repository/photo_api_repository_impl.dart';
import 'package:image_search_app/presentation_layer/home/home_screen.dart';
import 'package:image_search_app/presentation_layer/home/home_view_model.dart';
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
      home: ChangeNotifierProvider(
        create: (_) => HomeViewModel(
          repository: PhotoApiRepositoryImpl(
            PixabayApi(
              http.Client(),
            ),
          ),
        ),
        child: const HomeScreen(),
      ),
    );
  }
}
