import 'package:note_app/domain_layer/model/note.dart';
import 'package:note_app/domain_layer/repository/note_repository.dart';
import 'package:note_app/domain_layer/util/note_order.dart';
import 'package:note_app/domain_layer/util/order_type.dart';

class GetNotesUseCase {
  NoteRepository repository;

  GetNotesUseCase({
    required this.repository,
  });

  Future<List<Note>> call(NoteOrder noteOrder) async {
    List<Note> notes = await repository.getNotes();
    notes.sort(((a, b) => -a.timestamp.compareTo(b.timestamp)));

    switch (noteOrder) {
      case NoteOrderTitle(orderType: OrderType type):
        switch (type) {
          case Ascending():
            notes.sort(((a, b) => a.title.compareTo(b.title)));
          case Descending():
            notes.sort(((a, b) => -a.title.compareTo(b.title)));
        }

      case NoteOrderDate(orderType: OrderType type):
        switch (type) {
          case Ascending():
            notes.sort(((a, b) => a.timestamp.compareTo(b.timestamp)));
          case Descending():
            notes.sort(((a, b) => -a.timestamp.compareTo(b.timestamp)));
        }

      case NoteOrderColor(orderType: OrderType type):
        switch (type) {
          case Ascending():
            notes.sort(((a, b) => a.color.compareTo(b.color)));
          case Descending():
            notes.sort(((a, b) => -a.color.compareTo(b.color)));
        }
    }

    return notes;
  }
}
