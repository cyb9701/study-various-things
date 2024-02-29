import '../model/note.dart';
import '../repository/note_repository.dart';

class AddNote {
  NoteRepository repository;

  AddNote({
    required this.repository,
  });

  Future<void> call(Note note) async {
    await repository.insertNote(note);
  }
}
