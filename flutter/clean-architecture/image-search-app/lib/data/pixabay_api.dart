import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:image_search_app/data/photo_api_repository.dart';

import '../model/photo.dart';

class PixabayApi implements PhotoApiRepository {
  static const baseUrl = 'https://pixabay.com/api';
  static const key = '42449085-69bca0423db80e38b67e1c232';

  @override
  Future<List<Photo>> fetch(String query) async {
    final response = await http.get(
      Uri.parse('$baseUrl?key=$key&q=$query&image_type=photo'),
    );

    final jsonResponse = jsonDecode(response.body);
    Iterable hits = jsonResponse['hits'];
    return hits.map((e) => Photo.fromJson(e)).toList();
  }
}
