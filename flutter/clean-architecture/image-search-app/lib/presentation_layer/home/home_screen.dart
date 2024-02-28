import 'dart:async';

import 'package:flutter/material.dart';
import 'package:image_search_app/presentation_layer/home/components/photo_widget.dart';
import 'package:image_search_app/presentation_layer/home/home_ui_event.dart';
import 'package:provider/provider.dart';

import 'home_view_model.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final TextEditingController _textEditingController = TextEditingController(text: 'apple');

  StreamSubscription? _subscription;

  @override
  void initState() {
    Future.microtask(() {
      final viewModel = context.read<HomeViewModel>();
      _subscription = viewModel.eventStream.listen((event) {
        if (event is ShowSnackBar) {
          final message = (event).message;
          final snackBar = SnackBar(content: Text(message));
          ScaffoldMessenger.of(context).showSnackBar(snackBar);
        }
      });
    });

    super.initState();
  }

  @override
  void dispose() {
    _textEditingController.dispose();
    _subscription?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
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
                  onPressed: () {
                    context.read<HomeViewModel>().fetch(_textEditingController.text);
                  },
                  icon: const Icon(
                    Icons.search,
                  ),
                ),
              ),
            ),
          ),
          Consumer<HomeViewModel>(
            builder: (_, viewModel, child) {
              if (viewModel.state.isLoading) {
                return const CircularProgressIndicator();
              }
              return Expanded(
                child: GridView.builder(
                  padding: const EdgeInsets.all(16),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    crossAxisSpacing: 16,
                    mainAxisSpacing: 16,
                  ),
                  itemCount: viewModel.photos.length,
                  itemBuilder: (context, index) {
                    return PhotoWidget(
                      photo: viewModel.photos[index],
                    );
                  },
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
