import 'package:flutter/material.dart';
import 'package:note_app/domain_layer/model/note.dart';
import 'package:note_app/domain_layer/repository/note_repository.dart';
import 'package:note_app/presentation_layer/add_edit_note/add_edit_note_event.dart';

class AddEditNoteViewModel with ChangeNotifier {
  final NoteRepository repository;

  AddEditNoteViewModel(this.repository);

  int _color = Colors.orange.value;
  int get color => _color;

  void onEvent(AddEditNoteEvent event) {
    switch (event) {
      case ChangeColor(color: int color):
        _changeColor(color);
      case SaveNote(id: int? id, title: String title, content: String content):
        _saveNote(id, title, content);
    }
  }

  void _changeColor(int color) {
    _color = color;
    notifyListeners();
  }

  Future<void> _saveNote(int? id, String title, String content) async {
    final note = Note(
      id: id,
      title: title,
      content: content,
      color: _color,
      timestamp: DateTime.now().millisecondsSinceEpoch,
    );

    if (id == null) {
      await repository.insertNote(note);
    } else {
      await repository.updateNote(note);
    }
  }
}
