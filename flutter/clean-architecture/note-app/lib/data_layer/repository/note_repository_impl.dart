import 'package:note_app/data_layer/data_source/note_db.dart';
import 'package:note_app/domain_layer/model/note.dart';
import 'package:note_app/domain_layer/repository/note_repository.dart';

class NoteRepositoryImpl implements NoteRepository {
  final NoteDb noteDb;

  NoteRepositoryImpl({
    required this.noteDb,
  });

  @override
  Future<List<Note>> getNotes() {
    // TODO: implement getNotes
    throw UnimplementedError();
  }

  @override
  Future<Note> getNoteById(int id) {
    // TODO: implement getNoteById
    throw UnimplementedError();
  }

  @override
  Future<void> insertNote(Note note) {
    // TODO: implement insertNote
    throw UnimplementedError();
  }

  @override
  Future<void> updateNote(Note note) {
    // TODO: implement updateNote
    throw UnimplementedError();
  }

  @override
  Future<void> deleteNote(Note note) {
    // TODO: implement deleteNote
    throw UnimplementedError();
  }
}
