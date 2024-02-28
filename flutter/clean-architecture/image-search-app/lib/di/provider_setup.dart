import 'package:http/http.dart' as http;
import 'package:image_search_app/data_layer/data_sorce/pixabay_api.dart';
import 'package:image_search_app/data_layer/repository/photo_api_repository_impl.dart';
import 'package:image_search_app/domain_layer/repository/photo_api_repository.dart';
import 'package:image_search_app/domain_layer/use_case/get_photos_use_case.dart';
import 'package:image_search_app/presentation_layer/home/home_view_model.dart';
import 'package:provider/provider.dart';
import 'package:provider/single_child_widget.dart';

// 1. provider 전체.
List<SingleChildWidget> globalProviders = [
  ...independentModels,
  ...dependentModels,
  ...viewModel,
];

// 2. 독립적인 객체.
List<SingleChildWidget> independentModels = [
  Provider<http.Client>(
    create: (context) => http.Client(),
  ),
];

// 3. 2번에 의존성 있는 객체.
List<SingleChildWidget> dependentModels = [
  ProxyProvider<http.Client, PixabayApi>(
    update: (context, client, pixabayApi) => PixabayApi(client),
  ),
  ProxyProvider<PixabayApi, PhotoApiRepository>(
    update: (context, api, _) => PhotoApiRepositoryImpl(api),
  ),
  ProxyProvider<PhotoApiRepository, GetPhotosUseCase>(
    update: (context, repository, _) => GetPhotosUseCase(repository: repository),
  ),
];

// 4. View Model.
List<SingleChildWidget> viewModel = [
  ChangeNotifierProvider<HomeViewModel>(
    create: (context) => HomeViewModel(getPhotosUseCase: context.read<GetPhotosUseCase>()),
  ),
];
