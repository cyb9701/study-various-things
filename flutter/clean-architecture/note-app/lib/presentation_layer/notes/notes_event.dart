import 'package:freezed_annotation/freezed_annotation.dart';

import '../../domain_layer/model/note.dart';

part 'notes_event.freezed.dart';

@freezed
sealed class NotesEvent with _$NotesEvent {
  const factory NotesEvent.loadNotes() = LoadNotes;
  const factory NotesEvent.deleteNote(Note note) = DeleteNote;
  const factory NotesEvent.undoNote(Note note) = UndoNote;
}
