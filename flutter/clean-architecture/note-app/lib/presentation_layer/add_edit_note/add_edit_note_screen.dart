import 'dart:async';

import 'package:flutter/material.dart';
import 'package:note_app/domain_layer/model/note.dart';
import 'package:note_app/presentation_layer/add_edit_note/add_edit_note_event.dart';
import 'package:note_app/presentation_layer/add_edit_note/add_edit_note_view_model.dart';
import 'package:note_app/ui/colors.dart';
import 'package:provider/provider.dart';

class AddEditNoteScreen extends StatefulWidget {
  final Note? note;

  const AddEditNoteScreen({
    super.key,
    this.note,
  });

  @override
  State<AddEditNoteScreen> createState() => _AddEditNoteScreenState();
}

class _AddEditNoteScreenState extends State<AddEditNoteScreen> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _contentController = TextEditingController();

  StreamSubscription? _streamSubscription;

  @override
  void initState() {
    Future.microtask(() {
      final viewModel = context.read<AddEditNoteViewModel>();
      _streamSubscription = viewModel.eventStream.listen((event) {
        event.when(savedNote: () {
          Navigator.pop(context, true);
        });
      });
    });
    super.initState();
  }

  @override
  void dispose() {
    _titleController.dispose();
    _contentController.dispose();
    _streamSubscription?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final viewModel = context.watch<AddEditNoteViewModel>();

    return Scaffold(
      backgroundColor: Color(viewModel.color),
      floatingActionButton: floatingActionButton(viewModel),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            children: [
              backgroundColors(viewModel),
              TextField(
                controller: _titleController,
                cursorColor: darkGray,
                maxLines: 1,
                style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                      color: darkGray,
                    ),
                decoration: const InputDecoration(
                  hintText: '제목을 입력하세요',
                  border: InputBorder.none,
                ),
              ),
              TextField(
                controller: _contentController,
                cursorColor: darkGray,
                maxLines: null,
                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                      color: darkGray,
                    ),
                decoration: const InputDecoration(
                  hintText: '제목을 입력하세요',
                  border: InputBorder.none,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Padding backgroundColors(AddEditNoteViewModel viewModel) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: colors.map((color) {
          return GestureDetector(
            onTap: () {
              viewModel.onEvent(AddEditNoteEvent.changeColor(color.value));
            },
            child: Container(
              width: 45,
              height: 45,
              decoration: BoxDecoration(
                color: color,
                boxShadow: [
                  BoxShadow(
                    color: darkGray.withOpacity(0.2),
                    blurRadius: 6.0,
                    spreadRadius: 1.0,
                  )
                ],
                shape: BoxShape.circle,
                border: viewModel.color != color.value
                    ? null
                    : Border.all(
                        color: darkGray,
                        width: 2,
                      ),
              ),
            ),
          );
        }).toList(),
      ),
    );
  }

  FloatingActionButton floatingActionButton(AddEditNoteViewModel viewModel) {
    return FloatingActionButton(
      onPressed: () {
        if (_titleController.text.isEmpty || _contentController.text.isEmpty) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text('Empty'),
            ),
          );
        }

        viewModel.onEvent(
          AddEditNoteEvent.saveNote(
            widget.note?.id,
            _titleController.text,
            _contentController.text,
          ),
        );
      },
      child: const Icon(
        Icons.save_rounded,
      ),
    );
  }
}
