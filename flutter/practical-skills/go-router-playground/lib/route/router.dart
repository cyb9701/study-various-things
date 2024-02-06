import 'package:go_router/go_router.dart';
import 'package:go_router_playground/screens/1_basic_screen.dart';
import 'package:go_router_playground/screens/2_named_screen.dart';
import 'package:go_router_playground/screens/3_push_screen.dart';
import 'package:go_router_playground/screens/4_pop_base_screen.dart';
import 'package:go_router_playground/screens/5_pop_return_screen.dart';
import 'package:go_router_playground/screens/6_path_param_screen.dart';
import 'package:go_router_playground/screens/root_screen.dart';

import '../screens/7_query_param_screen.dart';

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
        GoRoute(
          path: 'named',
          /**
           * path가 너무 길어졌을 때 유용하다.
           * 
           * 123/123123/123/123/21/312/312/31/212323/
           * -> login_page
           */
          name: 'named_screen',
          builder: (context, state) {
            return const NamedScreen();
          },
        ),
        GoRoute(
          path: 'push',
          builder: (context, state) {
            return const PushScreen();
          },
        ),
        GoRoute(
          path: 'pop',
          builder: (context, state) {
            return const PopBaseScreen();
          },
          routes: [
            GoRoute(
              path: 'return',
              builder: (context, state) {
                return const PopReturnScreen();
              },
            ),
          ],
        ),
        GoRoute(
          /**
           * /path_param/123
           */
          path: 'path_param/:id',
          builder: (context, state) {
            return const PathParamScreen();
          },
          routes: [
            GoRoute(
              path: ':name',
              builder: (context, state) {
                return const PathParamScreen();
              },
            ),
          ],
        ),
        GoRoute(
          path: 'query_param',
          builder: (context, state) {
            return const QueryParamScreen();
          },
        ),
      ],
    ),
  ],
);
