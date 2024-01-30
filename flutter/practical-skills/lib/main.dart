import 'package:flutter/material.dart';

import 'common/component/custom_text_form_field.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        fontFamily: 'NotoSans',
      ),
      home: Scaffold(
        backgroundColor: Colors.white,
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CustomTextFormField(
              hintText: '이메일을 입력해주세요',
              onChanged: (value) {},
            ),
            CustomTextFormField(
              hintText: '비밀번호를 입력해주세요',
              obscureText: true,
              onChanged: (value) {},
            ),
          ],
        ),
      ),
    );
  }
}
