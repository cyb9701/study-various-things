import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:practical_skills/common/layout/default_layout.dart';
import 'package:practical_skills/user/model/user_model.dart';
import 'package:practical_skills/user/provider/user_me_provider.dart';

import '../../common/component/custom_text_form_field.dart';
import '../../common/const/colors.dart';

class LoginScreen extends ConsumerStatefulWidget {
  const LoginScreen({super.key});

  static const routeName = 'login';

  @override
  ConsumerState<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends ConsumerState<LoginScreen> {
  String username = 'test@codefactory.ai';
  String password = 'testtest';

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(userMeProvider);

    return DefaultLayout(
      child: SingleChildScrollView(
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const Title(),
                const SizedBox(height: 16),
                const SubTitle(),
                Image.asset(
                  'assets/img/misc/logo.png',
                  height: MediaQuery.sizeOf(context).width / 3 * 2,
                  fit: BoxFit.fitHeight,
                ),
                const SizedBox(height: 16),
                CustomTextFormField(
                  hintText: '이메일을 입력해주세요',
                  onChanged: (value) {
                    username = value;
                  },
                ),
                const SizedBox(height: 16),
                CustomTextFormField(
                  hintText: '비밀번호를 입력해주세요',
                  obscureText: true,
                  onChanged: (value) {
                    password = value;
                  },
                ),
                const SizedBox(height: 16),
                ElevatedButton(
                  onPressed: state is UserModelLoading
                      ? null
                      : () async {
                          ref.read(userMeProvider.notifier).login(
                                username: username,
                                password: password,
                              );
                          // final rawString = '$username:$password';
                          // Codec<String, String> stringToBase64 = utf8.fuse(base64);
                          // String token = stringToBase64.encode(rawString);

                          // final response = await dio.post(
                          //   '$ip/auth/login',
                          //   options: Options(
                          //     headers: {
                          //       authorization: 'Basic $token',
                          //     },
                          //   ),
                          // );

                          // final refreshToken = response.data['refreshToken'];
                          // final accessToken = response.data['accessToken'];

                          // final storage = ref.read(secureStorageProvider);
                          // await storage.write(key: refreshTokenKey, value: refreshToken);
                          // await storage.write(key: accessTokenKey, value: accessToken);

                          // if (!mounted) return;
                          // Navigator.push(
                          //   context,
                          //   MaterialPageRoute(
                          //     builder: (context) => const RootTab(),
                          //   ),
                          // );
                        },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: primaryColor,
                  ),
                  child: const Text(
                    '로그인',
                  ),
                ),
                TextButton(
                  onPressed: () async {},
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
