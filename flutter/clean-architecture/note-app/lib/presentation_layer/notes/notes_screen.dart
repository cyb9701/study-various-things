import 'package:flutter/material.dart';
import 'package:note_app/presentation_layer/add_edit_note/add_edit_note_screen.dart';
import 'package:note_app/presentation_layer/notes/components/order_section.dart';
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
      appBar: appBar(viewModel),
      floatingActionButton: floatingActionButton(context, viewModel),
      body: Column(
        children: [
          AnimatedSwitcher(
            duration: const Duration(milliseconds: 1500),
            child: state.isOrderSectionVisible
                ? OrderSection(
                    noteOrder: state.noteOrder,
                    onOrderChanged: (order) {
                      viewModel.onEvent(NotesEvent.changeOrder(order));
                    },
                  )
                : const SizedBox.shrink(),
          ),
          Expanded(
            child: ListView.separated(
              padding: const EdgeInsets.all(8),
              itemCount: state.notes.length,
              itemBuilder: (context, index) {
                final note = state.notes[index];
                return NoteItem(
                  note: note,
                  onEditTap: () async {
                    final result = await Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => AddEditNoteScreen(
                          note: note,
                        ),
                      ),
                    );

                    if (result ?? false) {
                      viewModel.onEvent(const NotesEvent.loadNotes());
                    }
                  },
                  onDeleteTap: () {
                    viewModel.onEvent(NotesEvent.deleteNote(note));

                    ScaffoldMessenger.of(context).clearSnackBars();
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: const Text('Delete'),
                        action: SnackBarAction(
                          label: 'Undo',
                          onPressed: () {
                            viewModel.onEvent(NotesEvent.undoNote(note));
                          },
                        ),
                      ),
                    );
                  },
                );
              },
              separatorBuilder: (context, index) => const SizedBox(height: 8),
            ),
          ),
        ],
      ),
    );
  }

  AppBar appBar(NotesViewModel viewModel) {
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
          onPressed: () {
            viewModel.changeOrderSectionVisible();
          },
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
