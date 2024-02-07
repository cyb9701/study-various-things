import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:practical_skills/common/const/colors.dart';
import 'package:practical_skills/common/layout/default_layout.dart';

class OrderDoneScreen extends StatelessWidget {
  const OrderDoneScreen({super.key});

  static const routeName = 'order-done';

  @override
  Widget build(BuildContext context) {
    return DefaultLayout(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(
                Icons.thumb_up_rounded,
                color: primaryColor,
                size: 50,
              ),
              const Padding(
                padding: EdgeInsets.symmetric(vertical: 32),
                child: Text(
                  '결제 완료',
                ),
              ),
              ElevatedButton(
                onPressed: () {
                  context.go('/');
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: primaryColor,
                ),
                child: const Text(
                  '홈오르 이동하기',
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
