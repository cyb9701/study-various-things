import 'package:note_app/data_layer/data_source/note_db.dart';
import 'package:note_app/domain_layer/model/note.dart';
import 'package:note_app/domain_layer/repository/note_repository.dart';

class NoteRepositoryImpl implements NoteRepository {
  final NoteDb noteDb;

  NoteRepositoryImpl({
    required this.noteDb,
  });

  @override
  Future<List<Note>> getNotes() async {
    return await noteDb.getNotes();
  }

  @override
  Future<Note?> getNoteById(int id) async {
    return await noteDb.getNoteById(id);
  }

  @override
  Future<void> insertNote(Note note) async {
    await noteDb.insertNote(note);
  }

  @override
  Future<void> updateNote(Note note) async {
    await noteDb.updateNote(note);
  }

  @override
  Future<void> deleteNote(Note note) async {
    await noteDb.deleteNote(note);
  }
}
