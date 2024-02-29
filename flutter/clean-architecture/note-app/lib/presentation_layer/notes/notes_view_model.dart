import 'package:flutter/material.dart';
import 'package:note_app/domain_layer/repository/note_repository.dart';
import 'package:note_app/presentation_layer/notes/notes_state.dart';

import '../../domain_layer/model/note.dart';
import 'notes_event.dart';

class NotesViewModel with ChangeNotifier {
  final NoteRepository repository;

  NotesViewModel({
    required this.repository,
  });

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
    List<Note> notes = await repository.getNotes();
    _state = _state.copyWith(notes: notes);
    notifyListeners();
  }

  Future<void> _deleteNote(Note note) async {
    await repository.deleteNote(note);
    _recentlyDeletedNote = note;
    await _loadNotes();
  }

  Future<void> _undoNote(Note note) async {
    if (_recentlyDeletedNote != null) {
      await repository.insertNote(_recentlyDeletedNote!);
      _recentlyDeletedNote = null;
      await _loadNotes();
    }
  }
}
