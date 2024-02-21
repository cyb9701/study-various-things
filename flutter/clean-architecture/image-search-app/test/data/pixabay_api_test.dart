import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:image_search_app/data_layer/data_sorce/pixabay_api.dart';
import 'package:image_search_app/data_layer/repository/photo_api_repository_impl.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';

import 'pixabay_api_test.mocks.dart';

@GenerateMocks([http.Client])
void main() {
  test('Pixabay 데이터를 잘 가져와야 한다', () async {
    final api = PhotoApiRepositoryImpl(
      PixabayApi(
        http.Client(),
      ),
    );

    final client = MockClient();

    when(
      client.get(
        Uri.parse('${PixabayApi.baseUrl}?key=${PixabayApi.key}&q=iphone&image_type=photo'),
      ),
    ).thenAnswer((_) async => http.Response('json', 200));

    final result = await api.fetch('apple');

    expect(result.length, 20);

    verify(
      client.get(
        Uri.parse('${PixabayApi.baseUrl}?key=${PixabayApi.key}&q=iphone&image_type=photo'),
      ),
    );
  });
}
