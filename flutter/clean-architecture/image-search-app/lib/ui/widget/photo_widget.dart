import 'package:flutter/material.dart';

import '../../model/photo.dart';

class PhotoWidget extends StatelessWidget {
  final Photo photo;

  const PhotoWidget({
    super.key,
    required this.photo,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: const BorderRadius.all(Radius.circular(16)),
        image: DecorationImage(
          image: NetworkImage(photo.webformatURL),
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
