import '../model/cursor_pagination_model.dart';
import '../model/pagination_params.dart';

abstract class BasePaginationRepositoryInterface<T> {
  Future<CursorPaginationModel<T>> paginate({
    PaginationParams? paginationParams = const PaginationParams(),
  });
}
