import 'package:flutter/material.dart';
import 'package:note_app/domain_layer/util/note_order.dart';
import 'package:note_app/domain_layer/util/order_type.dart';

class OrderSection extends StatelessWidget {
  final NoteOrder noteOrder;
  final void Function(NoteOrder) onOrderChanged;

  const OrderSection({
    super.key,
    required this.noteOrder,
    required this.onOrderChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          children: [
            buildNoteOrderRadio(
              value: NoteOrder.title(noteOrder.orderType),
              label: 'Title',
            ),
            buildNoteOrderRadio(
              value: NoteOrder.date(noteOrder.orderType),
              label: 'Date',
            ),
            buildNoteOrderRadio(
              value: NoteOrder.color(noteOrder.orderType),
              label: 'Color',
            ),
          ],
        ),
        Row(
          children: [
            buildOrderTypeRadio(
              value: const OrderType.ascending(),
              label: 'Ascending',
            ),
            buildOrderTypeRadio(
              value: const OrderType.descending(),
              label: 'Descending',
            ),
          ],
        ),
      ],
    );
  }

  Widget buildNoteOrderRadio({
    required NoteOrder value,
    required String label,
  }) {
    return RadioMenuButton<NoteOrder>(
      value: value,
      groupValue: noteOrder,
      onChanged: (value) {
        if (value == null) return;
        onOrderChanged(value);
      },
      child: Text(
        label,
        style: const TextStyle(
          color: Colors.white,
        ),
      ),
    );
  }

  Widget buildOrderTypeRadio({
    required OrderType value,
    required String label,
  }) {
    return RadioMenuButton<OrderType>(
      value: value,
      groupValue: noteOrder.orderType,
      onChanged: (value) {
        if (value == null) return;
        onOrderChanged(
          noteOrder.copyWith(
            orderType: value,
          ),
        );
      },
      child: Text(
        label,
        style: const TextStyle(
          color: Colors.white,
        ),
      ),
    );
  }
}
