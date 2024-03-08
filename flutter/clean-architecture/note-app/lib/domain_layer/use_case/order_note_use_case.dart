import 'package:note_app/domain_layer/util/note_order.dart';
import 'package:note_app/domain_layer/util/order_type.dart';

import '../model/note.dart';

class OrderNoteUseCase {
  OrderNoteUseCase();

  List<Note> call(List<Note> notes, NoteOrder noteOrder) {
    final originNotes = notes;
    switch (noteOrder) {
      case NoteOrderTitle(orderType: OrderType type):
        switch (type) {
          case Ascending():
            originNotes.sort(((a, b) => a.title.compareTo(b.title)));
          case Descending():
            originNotes.sort(((a, b) => -a.title.compareTo(b.title)));
        }

      case NoteOrderDate(orderType: OrderType type):
        switch (type) {
          case Ascending():
            originNotes.sort(((a, b) => a.timestamp.compareTo(b.timestamp)));
          case Descending():
            originNotes.sort(((a, b) => -a.timestamp.compareTo(b.timestamp)));
        }

      case NoteOrderColor(orderType: OrderType type):
        switch (type) {
          case Ascending():
            originNotes.sort(((a, b) => a.color.compareTo(b.color)));
          case Descending():
            originNotes.sort(((a, b) => -a.color.compareTo(b.color)));
        }
    }

    return originNotes;
  }
}
