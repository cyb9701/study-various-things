import 'package:note_app/domain_layer/model/note.dart';
import 'package:note_app/domain_layer/repository/note_repository.dart';

class GetNote {
  NoteRepository repository;

  GetNote({
    required this.repository,
  });

  Future<Note?> call(int id) async {
    Note? note = await repository.getNoteById(id);
    return note;
  }
}
