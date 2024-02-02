import 'package:flutter/material.dart';
import 'package:riverpod_playround/layout/default_layout.dart';
import 'package:riverpod_playround/screen/auto_dispose_modifier_screen.dart';
import 'package:riverpod_playround/screen/family_modifier_screen.dart';
import 'package:riverpod_playround/screen/future_provider_screen.dart';
import 'package:riverpod_playround/screen/state_notifier_provider_screen.dart';
import 'package:riverpod_playround/screen/state_provider_screen.dart';
import 'package:riverpod_playround/screen/stream_provider_screen.dart';

import 'listen_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultLayout(
      title: 'Home Screen',
      body: ListView(
        children: [
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const StateProviderScreen(),
                ),
              );
            },
            child: const Text(
              'State Provider',
            ),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const StateNotifierProviderScreen(),
                ),
              );
            },
            child: const Text(
              'State Notifier Provider',
            ),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const FutureProviderScreen(),
                ),
              );
            },
            child: const Text(
              'Future Provider',
            ),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const StreamProviderScreen(),
                ),
              );
            },
            child: const Text(
              'Stream Provider',
            ),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const FamilyModifierScreen(),
                ),
              );
            },
            child: const Text(
              'Family Modifier',
            ),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const AutoDisposeModifierScreen(),
                ),
              );
            },
            child: const Text(
              'Auto Dispose Modifier',
            ),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const ListenScreen(),
                ),
              );
            },
            child: const Text(
              'Listen',
            ),
          ),
        ],
      ),
    );
  }
}
