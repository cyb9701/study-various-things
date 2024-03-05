import 'package:flutter/material.dart';
import 'package:note_app/ui/colors.dart';

class AddEditNoteScreen extends StatefulWidget {
  const AddEditNoteScreen({super.key});

  @override
  State<AddEditNoteScreen> createState() => _AddEditNoteScreenState();
}

class _AddEditNoteScreenState extends State<AddEditNoteScreen> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _contentController = TextEditingController();

  Color _color = colors.first;

  @override
  void dispose() {
    _titleController.dispose();
    _contentController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _color,
      floatingActionButton: floatingActionButton(),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: colors.map((color) {
                    return GestureDetector(
                      onTap: () {
                        setState(() {
                          _color = color;
                        });
                      },
                      child: Container(
                        width: 45,
                        height: 45,
                        decoration: BoxDecoration(
                          color: color,
                          boxShadow: [
                            BoxShadow(
                              color: darkGray.withOpacity(0.2),
                              blurRadius: 6.0,
                              spreadRadius: 1.0,
                            )
                          ],
                          shape: BoxShape.circle,
                          border: _color != color
                              ? null
                              : Border.all(
                                  color: darkGray,
                                  width: 2,
                                ),
                        ),
                      ),
                    );
                  }).toList(),
                ),
              ),
              TextField(
                controller: _titleController,
                cursorColor: darkGray,
                maxLines: 1,
                style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                      color: darkGray,
                    ),
                decoration: const InputDecoration(
                  hintText: '제목을 입력하세요',
                  border: InputBorder.none,
                ),
              ),
              TextField(
                controller: _contentController,
                cursorColor: darkGray,
                maxLines: null,
                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                      color: darkGray,
                    ),
                decoration: const InputDecoration(
                  hintText: '제목을 입력하세요',
                  border: InputBorder.none,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  FloatingActionButton floatingActionButton() {
    return FloatingActionButton(
      onPressed: () {},
      child: const Icon(
        Icons.save_rounded,
      ),
    );
  }
}
