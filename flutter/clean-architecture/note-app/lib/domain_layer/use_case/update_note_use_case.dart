import '../model/note.dart';
import '../repository/note_repository.dart';

class UpdateNoteUseCase {
  NoteRepository repository;

  UpdateNoteUseCase({
    required this.repository,
  });

  Future<void> call(Note note) async {
    await repository.updateNote(note);
  }
}
