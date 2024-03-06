import 'package:sqflite/sqlite_api.dart';

import '../../domain_layer/model/note.dart';

class NoteDbHelper {
  final Database database;

  NoteDbHelper({
    required this.database,
  });

  Future<List<Note>> getNotes() async {
    final List<Map<String, dynamic>> maps = await database.query(
      'note',
    );

    return maps.map((e) => Note.fromJson(e)).toList();
  }

  Future<Note?> getNoteById(int id) async {
    // SELECT * FROM note WHERE id = {id}
    final List<Map<String, dynamic>> maps = await database.query(
      'note',
      where: 'id = ?',
      whereArgs: [id],
    );

    if (maps.isEmpty) {
      return Note.fromJson(maps.first);
    } else {
      return null;
    }
  }

  Future<void> insertNote(Note note) async {
    await database.insert('note', note.toJson());
  }

  Future<void> updateNote(Note note) async {
    await database.update(
      'note',
      note.toJson(),
      where: 'id = ?',
      whereArgs: [note.id],
    );
  }

  Future<void> deleteNote(Note note) async {
    await database.delete(
      'note',
      where: 'id = ?',
      whereArgs: [note.id],
    );
  }
}
