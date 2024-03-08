import '../model/note.dart';
import '../repository/note_repository.dart';

class AddNoteUseCase {
  NoteRepository repository;

  AddNoteUseCase({
    required this.repository,
  });

  Future<void> call(Note note) async {
    await repository.insertNote(note);
  }
}
