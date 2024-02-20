import 'package:flutter/material.dart';
import 'package:image_search_app/data/photo_provider.dart';
import 'package:image_search_app/ui/widget/photo_widget.dart';

import '../data/api.dart';
import '../model/photo.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final TextEditingController _textEditingController = TextEditingController(text: 'apple');

  final PixabayApi _pixabayApi = PixabayApi();

  List<Photo> _photos = [];

  @override
  void dispose() {
    _textEditingController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final photoProvider = PhotoProvider.of(context);

    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.white,
        elevation: 0,
        title: const Text(
          '이미지 검색 앱',
          style: TextStyle(
            color: Colors.black,
          ),
        ),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: TextField(
              controller: _textEditingController,
              decoration: InputDecoration(
                border: const OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10)),
                ),
                suffixIcon: IconButton(
                  onPressed: () async {
                    final photos =
                        await photoProvider.pixabayApi.fetch(_textEditingController.text);
                    setState(() {
                      _photos = photos;
                    });
                  },
                  icon: const Icon(
                    Icons.search,
                  ),
                ),
              ),
            ),
          ),
          Expanded(
            child: GridView.builder(
              padding: const EdgeInsets.all(16),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                crossAxisSpacing: 16,
                mainAxisSpacing: 16,
              ),
              itemCount: _photos.length,
              itemBuilder: (context, index) {
                return PhotoWidget(
                  photo: _photos[index],
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
