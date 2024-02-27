sealed class HomeUiEvent<T> {
  factory HomeUiEvent.showSnackBar(String message) = ShowSnackBar;
}

class ShowSnackBar<T> implements HomeUiEvent<T> {
  final String message;

  ShowSnackBar(this.message);
}
