import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:practical_skills/common/const/colors.dart';
import 'package:practical_skills/common/layout/default_layout.dart';
import 'package:practical_skills/common/view/root_tab.dart';
import 'package:practical_skills/user/view/login_screen.dart';

import '../const/data.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  Future<void> _checkToken() async {
    final refreshToken = await storage.read(key: refreshTokenKey);
    // final accessToken = await storage.read(key: accessTokenKey);

    try {
      final response = await Dio().post(
        '$ip/auth/token',
        options: Options(
          headers: {
            'authorization': 'Bearer $refreshToken',
          },
        ),
      );

      await storage.write(key: accessTokenKey, value: response.data['accessToken']);

      if (!mounted) return;
      Navigator.pushAndRemoveUntil(
        context,
        MaterialPageRoute(
          builder: (context) => const RootTab(),
        ),
        (route) => false,
      );
    } catch (e) {
      if (!mounted) return;
      Navigator.pushAndRemoveUntil(
        context,
        MaterialPageRoute(
          builder: (context) => const LoginScreen(),
        ),
        (route) => false,
      );
    }
  }

  Future<void> deleteToken() async {
    await storage.deleteAll();
  }

  @override
  void initState() {
    _checkToken();
    super.initState();
  }

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
