import 'package:json_annotation/json_annotation.dart';

part 'cursor_pagination_model.g.dart';

// 기본.
abstract class CursorPaginationBase {}

// 오류.
class CursorPaginationErrorState extends CursorPaginationBase {
  final String message;

  CursorPaginationErrorState({
    required this.message,
  });
}

// 로딩 진행 중.
class CursorPaginationLoadingState extends CursorPaginationBase {}

// 새로고침 진행 중.
class CursorPaginationRefetchingState<T> extends CursorPagination<T> {
  CursorPaginationRefetchingState({
    required super.meta,
    required super.data,
  });
}

// 추가 데이터 요청 진행 중.
class CursorPaginationFetchingMoreState<T> extends CursorPagination<T> {
  CursorPaginationFetchingMoreState({
    required super.meta,
    required super.data,
  });
}

@JsonSerializable(
  genericArgumentFactories: true,
)
class CursorPagination<T> extends CursorPaginationBase {
  final CursorPaginationMetaModel meta;
  final List<T> data;

  CursorPagination({
    required this.meta,
    required this.data,
  });

  CursorPagination copyWith({
    CursorPaginationMetaModel? meta,
    List<T>? data,
  }) {
    return CursorPagination(
      meta: meta ?? this.meta,
      data: data ?? this.data,
    );
  }

  factory CursorPagination.fromJson(
    Map<String, dynamic> json,
    T Function(Object? json) fromJsonT,
  ) =>
      _$CursorPaginationFromJson(json, fromJsonT);
}

@JsonSerializable()
class CursorPaginationMetaModel {
  final int count;
  final bool hasMore;

  CursorPaginationMetaModel({
    required this.count,
    required this.hasMore,
  });

  CursorPaginationMetaModel copyWith({
    int? count,
    bool? hasMore,
  }) {
    return CursorPaginationMetaModel(
      count: count ?? this.count,
      hasMore: hasMore ?? this.hasMore,
    );
  }

  factory CursorPaginationMetaModel.fromJson(Map<String, dynamic> json) =>
      _$CursorPaginationMetaModelFromJson(json);
}
