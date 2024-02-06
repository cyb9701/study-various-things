import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:practical_skills/common/view/root_tab.dart';
import 'package:practical_skills/common/view/slapsh_screen.dart';
import 'package:practical_skills/restaurant/view/restaurant_detail_screen.dart';
import 'package:practical_skills/user/model/user_model.dart';
import 'package:practical_skills/user/provider/user_me_provider.dart';
import 'package:practical_skills/user/view/login_screen.dart';

final authProvider = ChangeNotifierProvider<AuthProvider>((ref) {
  return AuthProvider(ref);
});

class AuthProvider extends ChangeNotifier {
  final Ref ref;

  AuthProvider(this.ref) {
    ref.listen<UserModelBase?>(userMeProvider, (previous, next) {
      if (previous != next) {
        notifyListeners();
      }
    });
  }

  List<GoRoute> get routes => [
        GoRoute(
          path: '/',
          name: RootTab.routeName,
          builder: (context, state) => const RootTab(),
          routes: [
            GoRoute(
              path: 'restaurant/:rid',
              name: RestaurantDetailScreen.routeName,
              builder: (context, state) {
                return RestaurantDetailScreen(
                  id: state.pathParameters['rid']!,
                );
              },
            ),
          ],
        ),
        GoRoute(
          path: '/splash',
          name: SplashScreen.routeName,
          builder: (context, state) => const SplashScreen(),
        ),
        GoRoute(
          path: '/login',
          name: LoginScreen.routeName,
          builder: (context, state) => const LoginScreen(),
        ),
      ];

  void logout() {
    ref.read(userMeProvider.notifier).logout();
  }

  String? redirectLogic(GoRouterState state) {
    final location = state.uri.toString();

    final UserModelBase? userState = ref.read(userMeProvider);

    final logginIn = location == '/login';

    // 유저 정보가 없는데, 로그인 이면 그대로 로그인 페이지에 두고
    // 만약에 로그인 중이 아니라면 로그인 페이지로 이동.
    if (userState == null) {
      return logginIn ? null : '/login';
    }
    // user가 null이 아님.

    // UserModel
    // 사용자 정보가 있는 상태면
    // 로그인 중이거나 현재 위치가 SplashScreen 이면
    // 홈으로 이동.
    if (userState is UserModel) {
      return logginIn || location == '/splash' ? '/' : null;
    }

    // UserModelError
    if (userState is UserModelError) {
      return !logginIn ? '/login' : null;
    }

    return null;
  }
}
