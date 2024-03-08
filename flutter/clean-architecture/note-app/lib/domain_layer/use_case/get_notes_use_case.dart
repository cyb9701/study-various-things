import 'package:note_app/domain_layer/model/note.dart';
import 'package:note_app/domain_layer/repository/note_repository.dart';
import 'package:note_app/domain_layer/use_case/order_note_use_case.dart';
import 'package:note_app/domain_layer/util/note_order.dart';

class GetNotesUseCase {
  final NoteRepository repository;
  final OrderNoteUseCase orderNoteUseCase;

  GetNotesUseCase({
    required this.repository,
    required this.orderNoteUseCase,
  });

  Future<List<Note>> call(NoteOrder noteOrder) async {
    List<Note> notes = await repository.getNotes();
    notes = orderNoteUseCase(notes, noteOrder);
    return notes;
  }
}
