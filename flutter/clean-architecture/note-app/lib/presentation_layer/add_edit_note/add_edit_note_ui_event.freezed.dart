// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'add_edit_note_ui_event.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#adding-getters-and-methods-to-our-models');

/// @nodoc
mixin _$AddEditNoteUiEvent {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() savedNote,
    required TResult Function(String message) showSnackBar,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? savedNote,
    TResult? Function(String message)? showSnackBar,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? savedNote,
    TResult Function(String message)? showSnackBar,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(SavedNote value) savedNote,
    required TResult Function(ShowSnackBar value) showSnackBar,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(SavedNote value)? savedNote,
    TResult? Function(ShowSnackBar value)? showSnackBar,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(SavedNote value)? savedNote,
    TResult Function(ShowSnackBar value)? showSnackBar,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $AddEditNoteUiEventCopyWith<$Res> {
  factory $AddEditNoteUiEventCopyWith(
          AddEditNoteUiEvent value, $Res Function(AddEditNoteUiEvent) then) =
      _$AddEditNoteUiEventCopyWithImpl<$Res, AddEditNoteUiEvent>;
}

/// @nodoc
class _$AddEditNoteUiEventCopyWithImpl<$Res, $Val extends AddEditNoteUiEvent>
    implements $AddEditNoteUiEventCopyWith<$Res> {
  _$AddEditNoteUiEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$SavedNoteImplCopyWith<$Res> {
  factory _$$SavedNoteImplCopyWith(
          _$SavedNoteImpl value, $Res Function(_$SavedNoteImpl) then) =
      __$$SavedNoteImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$SavedNoteImplCopyWithImpl<$Res>
    extends _$AddEditNoteUiEventCopyWithImpl<$Res, _$SavedNoteImpl>
    implements _$$SavedNoteImplCopyWith<$Res> {
  __$$SavedNoteImplCopyWithImpl(
      _$SavedNoteImpl _value, $Res Function(_$SavedNoteImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$SavedNoteImpl implements SavedNote {
  const _$SavedNoteImpl();

  @override
  String toString() {
    return 'AddEditNoteUiEvent.savedNote()';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$SavedNoteImpl);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() savedNote,
    required TResult Function(String message) showSnackBar,
  }) {
    return savedNote();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? savedNote,
    TResult? Function(String message)? showSnackBar,
  }) {
    return savedNote?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? savedNote,
    TResult Function(String message)? showSnackBar,
    required TResult orElse(),
  }) {
    if (savedNote != null) {
      return savedNote();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(SavedNote value) savedNote,
    required TResult Function(ShowSnackBar value) showSnackBar,
  }) {
    return savedNote(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(SavedNote value)? savedNote,
    TResult? Function(ShowSnackBar value)? showSnackBar,
  }) {
    return savedNote?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(SavedNote value)? savedNote,
    TResult Function(ShowSnackBar value)? showSnackBar,
    required TResult orElse(),
  }) {
    if (savedNote != null) {
      return savedNote(this);
    }
    return orElse();
  }
}

abstract class SavedNote implements AddEditNoteUiEvent {
  const factory SavedNote() = _$SavedNoteImpl;
}

/// @nodoc
abstract class _$$ShowSnackBarImplCopyWith<$Res> {
  factory _$$ShowSnackBarImplCopyWith(
          _$ShowSnackBarImpl value, $Res Function(_$ShowSnackBarImpl) then) =
      __$$ShowSnackBarImplCopyWithImpl<$Res>;
  @useResult
  $Res call({String message});
}

/// @nodoc
class __$$ShowSnackBarImplCopyWithImpl<$Res>
    extends _$AddEditNoteUiEventCopyWithImpl<$Res, _$ShowSnackBarImpl>
    implements _$$ShowSnackBarImplCopyWith<$Res> {
  __$$ShowSnackBarImplCopyWithImpl(
      _$ShowSnackBarImpl _value, $Res Function(_$ShowSnackBarImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? message = null,
  }) {
    return _then(_$ShowSnackBarImpl(
      null == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$ShowSnackBarImpl implements ShowSnackBar {
  const _$ShowSnackBarImpl(this.message);

  @override
  final String message;

  @override
  String toString() {
    return 'AddEditNoteUiEvent.showSnackBar(message: $message)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$ShowSnackBarImpl &&
            (identical(other.message, message) || other.message == message));
  }

  @override
  int get hashCode => Object.hash(runtimeType, message);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$ShowSnackBarImplCopyWith<_$ShowSnackBarImpl> get copyWith =>
      __$$ShowSnackBarImplCopyWithImpl<_$ShowSnackBarImpl>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() savedNote,
    required TResult Function(String message) showSnackBar,
  }) {
    return showSnackBar(message);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? savedNote,
    TResult? Function(String message)? showSnackBar,
  }) {
    return showSnackBar?.call(message);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? savedNote,
    TResult Function(String message)? showSnackBar,
    required TResult orElse(),
  }) {
    if (showSnackBar != null) {
      return showSnackBar(message);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(SavedNote value) savedNote,
    required TResult Function(ShowSnackBar value) showSnackBar,
  }) {
    return showSnackBar(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(SavedNote value)? savedNote,
    TResult? Function(ShowSnackBar value)? showSnackBar,
  }) {
    return showSnackBar?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(SavedNote value)? savedNote,
    TResult Function(ShowSnackBar value)? showSnackBar,
    required TResult orElse(),
  }) {
    if (showSnackBar != null) {
      return showSnackBar(this);
    }
    return orElse();
  }
}

abstract class ShowSnackBar implements AddEditNoteUiEvent {
  const factory ShowSnackBar(final String message) = _$ShowSnackBarImpl;

  String get message;
  @JsonKey(ignore: true)
  _$$ShowSnackBarImplCopyWith<_$ShowSnackBarImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
