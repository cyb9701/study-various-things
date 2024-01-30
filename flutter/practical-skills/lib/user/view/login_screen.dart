import 'package:flutter/material.dart';
import 'package:practical_skills/common/layout/default_layout.dart';

import '../../common/component/custom_text_form_field.dart';
import '../../common/const/colors.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultLayout(
      child: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Title(),
            const SubTitle(),
            Image.asset(
              'assets/img/misc/logo.png',
              width: MediaQuery.sizeOf(context).width / 3 * 2,
            ),
            CustomTextFormField(
              hintText: '이메일을 입력해주세요',
              onChanged: (value) {},
            ),
            CustomTextFormField(
              hintText: '비밀번호를 입력해주세요',
              obscureText: true,
              onChanged: (value) {},
            ),
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: primaryColor,
              ),
              child: const Text(
                '로그인',
              ),
            ),
            TextButton(
              onPressed: () {},
              style: TextButton.styleFrom(
                foregroundColor: Colors.black,
              ),
              child: const Text(
                '회원가입',
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class Title extends StatelessWidget {
  const Title({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text(
      '환영합니다',
      style: TextStyle(
        fontSize: 34,
        fontWeight: FontWeight.w500,
        color: Colors.black,
      ),
    );
  }
}

class SubTitle extends StatelessWidget {
  const SubTitle({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text(
      '이메일과 비밀번호를 입력해서 로그인 해주세요!\n오늘도 성공적인 주문이 되길 :)',
      style: TextStyle(
        fontSize: 16,
        color: bodyTextColor,
      ),
    );
  }
}
