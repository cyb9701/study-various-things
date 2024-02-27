import 'package:http/http.dart' as http;

class PixabayApi {
  final http.Client client;

  PixabayApi(this.client);

  static const baseUrl = 'https://pixabay.com/api';
  static const key = '42449085-69bca0423db80e38b67e1c232';

  Future<http.Response> fetch(String query) async {
    final response = await client.get(
      Uri.parse('$baseUrl?key=$key&q=$query&image_type=photo'),
    );
    return response;
  }
}
