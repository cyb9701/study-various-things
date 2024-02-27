import '../../data_layer/data_sorce/result.dart';
import '../model/photo.dart';

abstract class PhotoApiRepository {
  Future<Result<List<Photo>>> fetch(String query);
}
