// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'cursor_pagination_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CursorPagination<T> _$CursorPaginationFromJson<T>(
  Map<String, dynamic> json,
  T Function(Object? json) fromJsonT,
) =>
    CursorPagination<T>(
      meta: CursorPaginationMetaModel.fromJson(
          json['meta'] as Map<String, dynamic>),
      data: (json['data'] as List<dynamic>).map(fromJsonT).toList(),
    );

Map<String, dynamic> _$CursorPaginationToJson<T>(
  CursorPagination<T> instance,
  Object? Function(T value) toJsonT,
) =>
    <String, dynamic>{
      'meta': instance.meta,
      'data': instance.data.map(toJsonT).toList(),
    };

CursorPaginationMetaModel _$CursorPaginationMetaModelFromJson(
        Map<String, dynamic> json) =>
    CursorPaginationMetaModel(
      count: json['count'] as int,
      hasMore: json['hasMore'] as bool,
    );

Map<String, dynamic> _$CursorPaginationMetaModelToJson(
        CursorPaginationMetaModel instance) =>
    <String, dynamic>{
      'count': instance.count,
      'hasMore': instance.hasMore,
    };
