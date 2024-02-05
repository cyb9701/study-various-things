import 'package:practical_skills/common/model/model_id.dart';

import '../model/cursor_pagination_model.dart';
import '../model/pagination_params.dart';

abstract class BasePaginationRepositoryInterface<T extends ModelIdInterface> {
  Future<CursorPagination<T>> paginate({
    PaginationParams? paginationParams = const PaginationParams(),
  });
}
