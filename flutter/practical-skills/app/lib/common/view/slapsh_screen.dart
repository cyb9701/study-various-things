import 'package:flutter/material.dart';
import 'package:practical_skills/common/const/colors.dart';
import 'package:practical_skills/common/layout/default_layout.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  static const routeName = 'splash';

  @override
  Widget build(BuildContext context) {
    return DefaultLayout(
      backgroundColor: primaryColor,
      child: SizedBox(
        width: MediaQuery.sizeOf(context).width,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: Image.asset(
                'assets/img/logo/logo.png',
                width: MediaQuery.sizeOf(context).width / 2,
              ),
            ),
            const CircularProgressIndicator(
              color: Colors.white,
            )
          ],
        ),
      ),
    );
  }
}
