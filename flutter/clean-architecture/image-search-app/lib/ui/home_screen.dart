import 'package:flutter/material.dart';
import 'package:image_search_app/data/photo_provider.dart';
import 'package:image_search_app/ui/widget/photo_widget.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final TextEditingController _textEditingController = TextEditingController(text: 'apple');

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
                    photoProvider.homeViewModel.fetch(_textEditingController.text);
                  },
                  icon: const Icon(
                    Icons.search,
                  ),
                ),
              ),
            ),
          ),
          StreamBuilder(
            stream: photoProvider.homeViewModel.photoStream,
            builder: (context, snapshot) {
              if (!snapshot.hasData) {
                return const CircularProgressIndicator();
              } else {
                final photo = snapshot.data!;
                return Expanded(
                  child: GridView.builder(
                    padding: const EdgeInsets.all(16),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 2,
                      crossAxisSpacing: 16,
                      mainAxisSpacing: 16,
                    ),
                    itemCount: photo.length,
                    itemBuilder: (context, index) {
                      return PhotoWidget(
                        photo: photo[index],
                      );
                    },
                  ),
                );
              }
            },
          ),
        ],
      ),
    );
  }
}
