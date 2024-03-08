sealed class AddEditNoteEvent {
  factory AddEditNoteEvent.changeColor(int color) = ChangeColor;
  factory AddEditNoteEvent.saveNote(
    int? id,
    String title,
    String content,
  ) = SaveNote;
}

class ChangeColor implements AddEditNoteEvent {
  final int color;

  ChangeColor(
    this.color,
  );
}

class SaveNote implements AddEditNoteEvent {
  final int? id;
  final String title;
  final String content;

  SaveNote(
    this.id,
    this.title,
    this.content,
  );
}
