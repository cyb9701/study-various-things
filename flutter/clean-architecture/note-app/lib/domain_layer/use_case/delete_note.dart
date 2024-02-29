import '../model/note.dart';
import '../repository/note_repository.dart';

class DeleteNote {
  NoteRepository repository;

  DeleteNote({
    required this.repository,
  });

  Future<void> call(Note note) async {
    await repository.deleteNote(note);
  }
}
