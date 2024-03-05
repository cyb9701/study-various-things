part of '../add_edit_note_screen.dart';

class _Colors extends StatelessWidget {
  final Color color;
  final void Function(Color) setColor;

  const _Colors({
    required this.color,
    required this.setColor,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: colors.map((newColor) {
          return GestureDetector(
            onTap: () => setColor(newColor),
            child: Container(
              width: 45,
              height: 45,
              decoration: BoxDecoration(
                color: newColor,
                boxShadow: [
                  BoxShadow(
                    color: darkGray.withOpacity(0.2),
                    blurRadius: 6.0,
                    spreadRadius: 1.0,
                  )
                ],
                shape: BoxShape.circle,
                border: color != newColor
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
    );
  }
}
