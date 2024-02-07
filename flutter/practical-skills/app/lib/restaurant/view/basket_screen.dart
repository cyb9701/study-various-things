import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/layout/default_layout.dart';

class BasketScreen extends ConsumerWidget {
  const BasketScreen({super.key});

  static const routeName = 'basket';

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return const DefaultLayout(
      title: '장바구니',
      child: Column(
        children: [],
      ),
    );
  }
}
