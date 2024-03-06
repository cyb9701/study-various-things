import 'package:flutter/material.dart';
import 'package:note_app/presentation_layer/add_edit_note/add_edit_note_screen.dart';
import 'package:note_app/presentation_layer/notes/notes_event.dart';
import 'package:note_app/presentation_layer/notes/notes_view_model.dart';
import 'package:provider/provider.dart';

import 'components/note_item.dart';

class NotesScreen extends StatelessWidget {
  const NotesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final viewModel = context.watch<NotesViewModel>();
    final state = viewModel.state;

    return Scaffold(
      appBar: appBar(),
      floatingActionButton: floatingActionButton(context, viewModel),
      body: ListView.separated(
        padding: const EdgeInsets.all(8),
        itemCount: state.notes.length,
        itemBuilder: (context, index) {
          return NoteItem(note: state.notes[index]);
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
          color: Colors.white,
        ),
      ),
      actions: [
        IconButton(
          onPressed: () {},
          icon: const Icon(
            Icons.sort_rounded,
            color: Colors.white,
          ),
        ),
      ],
    );
  }

  FloatingActionButton floatingActionButton(
    BuildContext context,
    NotesViewModel viewModel,
  ) {
    return FloatingActionButton(
      onPressed: () async {
        final result = await Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => const AddEditNoteScreen(),
          ),
        );

        if (result ?? false) {
          viewModel.onEvent(const NotesEvent.loadNotes());
        }
      },
      child: const Icon(
        Icons.add_rounded,
      ),
    );
  }
}
