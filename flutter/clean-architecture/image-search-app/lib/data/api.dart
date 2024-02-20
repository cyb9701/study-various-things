import 'dart:convert';

import 'package:http/http.dart' as http;

import '../model/photo.dart';

class PixabayApi {
  static const baseUrl = 'https://pixabay.com/api';
  static const key = '42449085-69bca0423db80e38b67e1c232';

  Future<List<Photo>> fetch(String query) async {
    final response = await http.get(
      Uri.parse('$baseUrl?key=$key&q=$query&image_type=photo'),
    );

    final jsonResponse = jsonDecode(response.body);
    Iterable hits = jsonResponse['hits'];
    return hits.map((e) => Photo.fromJson(e)).toList();
  }
}
