import 'package:go_router/go_router.dart';
import 'package:go_router_playground/screens/1_basic_screen.dart';
import 'package:go_router_playground/screens/root_screen.dart';

// https://blog.codefactory.ai -> "/"" -> path
// https://blog.codefactory.ai/flutter -> "/flutter"
final router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) {
        return const RootScreen();
      },
      routes: [
        GoRoute(
          path: 'basic',
          builder: (context, state) {
            return const BasicScreen();
          },
        ),
      ],
    ),
  ],
);
