import '../model/note.dart';
import '../repository/note_repository.dart';

class UpdateNote {
  NoteRepository repository;

  UpdateNote({
    required this.repository,
  });

  Future<void> call(Note note) async {
    await repository.updateNote(note);
  }
}
