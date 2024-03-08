import 'package:flutter/material.dart';
import 'package:note_app/domain_layer/use_case/use_cases.dart';
import 'package:note_app/presentation_layer/notes/notes_state.dart';

import '../../domain_layer/model/note.dart';
import 'notes_event.dart';

class NotesViewModel with ChangeNotifier {
  final UseCases useCases;

  NotesViewModel({
    required this.useCases,
  }) {
    _loadNotes();
  }

  NotesState _state = NotesState();
  NotesState get state => _state;

  Note? _recentlyDeletedNote;

  void onEvent(NotesEvent event) {
    switch (event) {
      case LoadNotes():
        _loadNotes();
      case DeleteNote(note: Note note):
        _deleteNote(note);
      case UndoNote(note: Note note):
        _undoNote(note);
    }
  }

  Future<void> _loadNotes() async {
    List<Note> notes = await useCases.getNotesUseCase(_state.noteOrder);
    _state = _state.copyWith(
      notes: notes,
    );
    notifyListeners();
  }

  Future<void> _deleteNote(Note note) async {
    await useCases.deleteNoteUseCase(note);
    _recentlyDeletedNote = note;
    await _loadNotes();
  }

  Future<void> _undoNote(Note note) async {
    if (_recentlyDeletedNote != null) {
      await useCases.addNoteUseCase(_recentlyDeletedNote!);
      _recentlyDeletedNote = null;
      await _loadNotes();
    }
  }
}
