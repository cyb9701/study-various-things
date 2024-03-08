import 'package:flutter/material.dart';
import 'package:note_app/di/provider_setup.dart';
import 'package:note_app/presentation_layer/notes/notes_screen.dart';
import 'package:note_app/ui/colors.dart';
import 'package:provider/provider.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final providers = await getProviders();

  runApp(
    MultiProvider(
      providers: providers,
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: colorScheme(context),
        canvasColor: darkGray,
        floatingActionButtonTheme: floatingActionButtonTheme(context),
        appBarTheme: appBarTheme(context),
        radioTheme: radioTheme(context),
      ),
      home: const NotesScreen(),
    );
  }

  RadioThemeData radioTheme(BuildContext context) {
    return Theme.of(context).radioTheme.copyWith(
          fillColor: MaterialStateProperty.resolveWith((states) => Colors.white),
        );
  }

  ColorScheme colorScheme(BuildContext context) {
    return Theme.of(context).colorScheme.copyWith(
          background: darkGray,
        );
  }

  FloatingActionButtonThemeData floatingActionButtonTheme(BuildContext context) {
    return Theme.of(context).floatingActionButtonTheme.copyWith(
          backgroundColor: ligtblue,
          foregroundColor: darkGray,
        );
  }

  AppBarTheme appBarTheme(BuildContext context) {
    return Theme.of(context).appBarTheme.copyWith(
          backgroundColor: darkGray,
          elevation: 0,
        );
  }
}
