import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/const/data.dart';
import 'package:practical_skills/common/dio/dio_provider.dart';
import 'package:practical_skills/order/repository/order_repository.dart';

final orderRepositoryProvider = Provider<OrderRepository>((ref) {
  final dio = ref.watch(dioProvider);
  final notifier = OrderRepository(dio, baseUrl: '$ip/order');
  return notifier;
});
