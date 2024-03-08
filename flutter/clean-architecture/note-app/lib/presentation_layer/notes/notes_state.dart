import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:note_app/domain_layer/util/note_order.dart';
import 'package:note_app/domain_layer/util/order_type.dart';

import '../../domain_layer/model/note.dart';

part 'notes_state.freezed.dart';

@freezed
class NotesState with _$NotesState {
  factory NotesState({
    @Default([]) List<Note> notes,
    @Default(NoteOrder.date(OrderType.descending())) NoteOrder noteOrder,
    required bool isOrderSectionVisible,
  }) = _NotesState;
}
