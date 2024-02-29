// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'notes_event.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#adding-getters-and-methods-to-our-models');

/// @nodoc
mixin _$NotesEvent {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loadNotes,
    required TResult Function(Note note) deleteNote,
    required TResult Function(Note note) undoNote,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loadNotes,
    TResult? Function(Note note)? deleteNote,
    TResult? Function(Note note)? undoNote,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loadNotes,
    TResult Function(Note note)? deleteNote,
    TResult Function(Note note)? undoNote,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(LoadNotes value) loadNotes,
    required TResult Function(DeleteNote value) deleteNote,
    required TResult Function(UndoNote value) undoNote,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(LoadNotes value)? loadNotes,
    TResult? Function(DeleteNote value)? deleteNote,
    TResult? Function(UndoNote value)? undoNote,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(LoadNotes value)? loadNotes,
    TResult Function(DeleteNote value)? deleteNote,
    TResult Function(UndoNote value)? undoNote,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $NotesEventCopyWith<$Res> {
  factory $NotesEventCopyWith(
          NotesEvent value, $Res Function(NotesEvent) then) =
      _$NotesEventCopyWithImpl<$Res, NotesEvent>;
}

/// @nodoc
class _$NotesEventCopyWithImpl<$Res, $Val extends NotesEvent>
    implements $NotesEventCopyWith<$Res> {
  _$NotesEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$LoadNotesImplCopyWith<$Res> {
  factory _$$LoadNotesImplCopyWith(
          _$LoadNotesImpl value, $Res Function(_$LoadNotesImpl) then) =
      __$$LoadNotesImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$LoadNotesImplCopyWithImpl<$Res>
    extends _$NotesEventCopyWithImpl<$Res, _$LoadNotesImpl>
    implements _$$LoadNotesImplCopyWith<$Res> {
  __$$LoadNotesImplCopyWithImpl(
      _$LoadNotesImpl _value, $Res Function(_$LoadNotesImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$LoadNotesImpl implements LoadNotes {
  const _$LoadNotesImpl();

  @override
  String toString() {
    return 'NotesEvent.loadNotes()';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$LoadNotesImpl);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loadNotes,
    required TResult Function(Note note) deleteNote,
    required TResult Function(Note note) undoNote,
  }) {
    return loadNotes();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loadNotes,
    TResult? Function(Note note)? deleteNote,
    TResult? Function(Note note)? undoNote,
  }) {
    return loadNotes?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loadNotes,
    TResult Function(Note note)? deleteNote,
    TResult Function(Note note)? undoNote,
    required TResult orElse(),
  }) {
    if (loadNotes != null) {
      return loadNotes();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(LoadNotes value) loadNotes,
    required TResult Function(DeleteNote value) deleteNote,
    required TResult Function(UndoNote value) undoNote,
  }) {
    return loadNotes(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(LoadNotes value)? loadNotes,
    TResult? Function(DeleteNote value)? deleteNote,
    TResult? Function(UndoNote value)? undoNote,
  }) {
    return loadNotes?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(LoadNotes value)? loadNotes,
    TResult Function(DeleteNote value)? deleteNote,
    TResult Function(UndoNote value)? undoNote,
    required TResult orElse(),
  }) {
    if (loadNotes != null) {
      return loadNotes(this);
    }
    return orElse();
  }
}

abstract class LoadNotes implements NotesEvent {
  const factory LoadNotes() = _$LoadNotesImpl;
}

/// @nodoc
abstract class _$$DeleteNoteImplCopyWith<$Res> {
  factory _$$DeleteNoteImplCopyWith(
          _$DeleteNoteImpl value, $Res Function(_$DeleteNoteImpl) then) =
      __$$DeleteNoteImplCopyWithImpl<$Res>;
  @useResult
  $Res call({Note note});

  $NoteCopyWith<$Res> get note;
}

/// @nodoc
class __$$DeleteNoteImplCopyWithImpl<$Res>
    extends _$NotesEventCopyWithImpl<$Res, _$DeleteNoteImpl>
    implements _$$DeleteNoteImplCopyWith<$Res> {
  __$$DeleteNoteImplCopyWithImpl(
      _$DeleteNoteImpl _value, $Res Function(_$DeleteNoteImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? note = null,
  }) {
    return _then(_$DeleteNoteImpl(
      null == note
          ? _value.note
          : note // ignore: cast_nullable_to_non_nullable
              as Note,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $NoteCopyWith<$Res> get note {
    return $NoteCopyWith<$Res>(_value.note, (value) {
      return _then(_value.copyWith(note: value));
    });
  }
}

/// @nodoc

class _$DeleteNoteImpl implements DeleteNote {
  const _$DeleteNoteImpl(this.note);

  @override
  final Note note;

  @override
  String toString() {
    return 'NotesEvent.deleteNote(note: $note)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$DeleteNoteImpl &&
            (identical(other.note, note) || other.note == note));
  }

  @override
  int get hashCode => Object.hash(runtimeType, note);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$DeleteNoteImplCopyWith<_$DeleteNoteImpl> get copyWith =>
      __$$DeleteNoteImplCopyWithImpl<_$DeleteNoteImpl>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loadNotes,
    required TResult Function(Note note) deleteNote,
    required TResult Function(Note note) undoNote,
  }) {
    return deleteNote(note);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loadNotes,
    TResult? Function(Note note)? deleteNote,
    TResult? Function(Note note)? undoNote,
  }) {
    return deleteNote?.call(note);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loadNotes,
    TResult Function(Note note)? deleteNote,
    TResult Function(Note note)? undoNote,
    required TResult orElse(),
  }) {
    if (deleteNote != null) {
      return deleteNote(note);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(LoadNotes value) loadNotes,
    required TResult Function(DeleteNote value) deleteNote,
    required TResult Function(UndoNote value) undoNote,
  }) {
    return deleteNote(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(LoadNotes value)? loadNotes,
    TResult? Function(DeleteNote value)? deleteNote,
    TResult? Function(UndoNote value)? undoNote,
  }) {
    return deleteNote?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(LoadNotes value)? loadNotes,
    TResult Function(DeleteNote value)? deleteNote,
    TResult Function(UndoNote value)? undoNote,
    required TResult orElse(),
  }) {
    if (deleteNote != null) {
      return deleteNote(this);
    }
    return orElse();
  }
}

abstract class DeleteNote implements NotesEvent {
  const factory DeleteNote(final Note note) = _$DeleteNoteImpl;

  Note get note;
  @JsonKey(ignore: true)
  _$$DeleteNoteImplCopyWith<_$DeleteNoteImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$UndoNoteImplCopyWith<$Res> {
  factory _$$UndoNoteImplCopyWith(
          _$UndoNoteImpl value, $Res Function(_$UndoNoteImpl) then) =
      __$$UndoNoteImplCopyWithImpl<$Res>;
  @useResult
  $Res call({Note note});

  $NoteCopyWith<$Res> get note;
}

/// @nodoc
class __$$UndoNoteImplCopyWithImpl<$Res>
    extends _$NotesEventCopyWithImpl<$Res, _$UndoNoteImpl>
    implements _$$UndoNoteImplCopyWith<$Res> {
  __$$UndoNoteImplCopyWithImpl(
      _$UndoNoteImpl _value, $Res Function(_$UndoNoteImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? note = null,
  }) {
    return _then(_$UndoNoteImpl(
      null == note
          ? _value.note
          : note // ignore: cast_nullable_to_non_nullable
              as Note,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $NoteCopyWith<$Res> get note {
    return $NoteCopyWith<$Res>(_value.note, (value) {
      return _then(_value.copyWith(note: value));
    });
  }
}

/// @nodoc

class _$UndoNoteImpl implements UndoNote {
  const _$UndoNoteImpl(this.note);

  @override
  final Note note;

  @override
  String toString() {
    return 'NotesEvent.undoNote(note: $note)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$UndoNoteImpl &&
            (identical(other.note, note) || other.note == note));
  }

  @override
  int get hashCode => Object.hash(runtimeType, note);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$UndoNoteImplCopyWith<_$UndoNoteImpl> get copyWith =>
      __$$UndoNoteImplCopyWithImpl<_$UndoNoteImpl>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loadNotes,
    required TResult Function(Note note) deleteNote,
    required TResult Function(Note note) undoNote,
  }) {
    return undoNote(note);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loadNotes,
    TResult? Function(Note note)? deleteNote,
    TResult? Function(Note note)? undoNote,
  }) {
    return undoNote?.call(note);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loadNotes,
    TResult Function(Note note)? deleteNote,
    TResult Function(Note note)? undoNote,
    required TResult orElse(),
  }) {
    if (undoNote != null) {
      return undoNote(note);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(LoadNotes value) loadNotes,
    required TResult Function(DeleteNote value) deleteNote,
    required TResult Function(UndoNote value) undoNote,
  }) {
    return undoNote(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(LoadNotes value)? loadNotes,
    TResult? Function(DeleteNote value)? deleteNote,
    TResult? Function(UndoNote value)? undoNote,
  }) {
    return undoNote?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(LoadNotes value)? loadNotes,
    TResult Function(DeleteNote value)? deleteNote,
    TResult Function(UndoNote value)? undoNote,
    required TResult orElse(),
  }) {
    if (undoNote != null) {
      return undoNote(this);
    }
    return orElse();
  }
}

abstract class UndoNote implements NotesEvent {
  const factory UndoNote(final Note note) = _$UndoNoteImpl;

  Note get note;
  @JsonKey(ignore: true)
  _$$UndoNoteImplCopyWith<_$UndoNoteImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
