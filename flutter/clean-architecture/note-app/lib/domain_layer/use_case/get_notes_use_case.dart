import 'package:note_app/domain_layer/model/note.dart';
import 'package:note_app/domain_layer/repository/note_repository.dart';

class GetNotesUseCase {
  NoteRepository repository;

  GetNotesUseCase({
    required this.repository,
  });

  Future<List<Note>> call() async {
    List<Note> notes = await repository.getNotes();
    notes.sort(((a, b) => -a.timestamp.compareTo(b.timestamp)));
    return notes;
  }
}
