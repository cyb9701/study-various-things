import 'package:note_app/domain_layer/model/note.dart';

abstract class NoteRepository {
  Future<List<Note>> getNotes();

  Future<Note?> getNoteById(int id);

  Future<void> insertNote(Note note);

  Future<void> updateNote(Note note);

  Future<void> deleteNote(Note note);
}
