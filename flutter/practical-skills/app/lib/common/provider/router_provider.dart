import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../user/provider/auth_provider.dart';

final routerProvider = Provider<GoRouter>((ref) {
  final authState = ref.read(authProvider);
  return GoRouter(
    initialLocation: '/splash',
    routes: authState.routes,
    refreshListenable: authState,
    redirect: (context, state) {
      return authState.redirectLogic(state);
    },
  );
});
