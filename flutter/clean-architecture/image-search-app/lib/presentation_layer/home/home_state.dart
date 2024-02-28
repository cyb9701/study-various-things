import 'package:freezed_annotation/freezed_annotation.dart';

import '../../domain_layer/model/photo.dart';

part 'home_state.freezed.dart';
part 'home_state.g.dart';

@freezed
class HomeState with _$HomeState {
  const factory HomeState({
    required List<Photo> photos,
    required bool isLoading,
  }) = _HomeState;

  factory HomeState.fromJson(Map<String, Object?> json) => _$HomeStateFromJson(json);
}
