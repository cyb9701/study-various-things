import '../model/note.dart';
import '../repository/note_repository.dart';

class DeleteNoteUseCase {
  NoteRepository repository;

  DeleteNoteUseCase({
    required this.repository,
  });

  Future<void> call(Note note) async {
    await repository.deleteNote(note);
  }
}
