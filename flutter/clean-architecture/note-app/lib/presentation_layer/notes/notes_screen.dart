import 'package:flutter/material.dart';
import 'package:note_app/domain_layer/model/note.dart';
import 'package:note_app/presentation_layer/add_edit_note/add_edit_note_screen.dart';

import 'components/note_item.dart';

class NotesScreen extends StatelessWidget {
  const NotesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: appBar(),
      floatingActionButton: floatingActionButton(context),
      body: ListView.separated(
        padding: const EdgeInsets.all(8),
        itemCount: 2,
        itemBuilder: (context, index) {
          return [
            NoteItem(
              note: Note(
                title: 'title',
                content: 'content',
                color: Colors.yellow.value,
                timestamp: DateTime.now().millisecondsSinceEpoch,
              ),
            ),
            NoteItem(
              note: Note(
                title: 'title',
                content: 'content',
                color: Colors.blueAccent.value,
                timestamp: DateTime.now().millisecondsSinceEpoch,
              ),
            ),
          ][index];
        },
        separatorBuilder: (context, index) => const SizedBox(height: 8),
      ),
    );
  }

  AppBar appBar() {
    return AppBar(
      centerTitle: false,
      title: const Text(
        'Note',
        style: TextStyle(
          fontSize: 24,
        ),
      ),
      actions: [
        IconButton(
          onPressed: () {},
          icon: const Icon(
            Icons.sort_rounded,
          ),
        ),
      ],
    );
  }

  FloatingActionButton floatingActionButton(BuildContext context) {
    return FloatingActionButton(
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => const AddEditNoteScreen(),
          ),
        );
      },
      child: const Icon(
        Icons.add_rounded,
      ),
    );
  }
}
