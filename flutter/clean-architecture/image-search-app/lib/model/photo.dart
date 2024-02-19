class Photo {
  Photo({
    required this.id,
    required this.pageURL,
    required this.type,
    required this.tags,
    required this.previewURL,
    required this.previewWidth,
    required this.previewHeight,
    required this.webformatURL,
    required this.webformatWidth,
    required this.webformatHeight,
    required this.largeImageURL,
    required this.fullHDURL,
    required this.imageURL,
    required this.imageWidth,
    required this.imageHeight,
    required this.imageSize,
    required this.views,
    required this.downloads,
    required this.likes,
    required this.comments,
    required this.userId,
    required this.user,
    required this.userImageURL,
  });

  late final int id;
  late final String pageURL;
  late final String type;
  late final String tags;
  late final String previewURL;
  late final int previewWidth;
  late final int previewHeight;
  late final String webformatURL;
  late final int webformatWidth;
  late final int webformatHeight;
  late final String largeImageURL;
  late final String fullHDURL;
  late final String imageURL;
  late final int imageWidth;
  late final int imageHeight;
  late final int imageSize;
  late final int views;
  late final int downloads;
  late final int likes;
  late final int comments;
  late final int userId;
  late final String user;
  late final String userImageURL;

  Photo.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    pageURL = json['pageURL'];
    type = json['type'];
    tags = json['tags'];
    previewURL = json['previewURL'];
    previewWidth = json['previewWidth'];
    previewHeight = json['previewHeight'];
    webformatURL = json['webformatURL'];
    webformatWidth = json['webformatWidth'];
    webformatHeight = json['webformatHeight'];
    largeImageURL = json['largeImageURL'];
    fullHDURL = json['fullHDURL'];
    imageURL = json['imageURL'];
    imageWidth = json['imageWidth'];
    imageHeight = json['imageHeight'];
    imageSize = json['imageSize'];
    views = json['views'];
    downloads = json['downloads'];
    likes = json['likes'];
    comments = json['comments'];
    userId = json['user_id'];
    user = json['user'];
    userImageURL = json['userImageURL'];
  }

  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['id'] = id;
    data['pageURL'] = pageURL;
    data['type'] = type;
    data['tags'] = tags;
    data['previewURL'] = previewURL;
    data['previewWidth'] = previewWidth;
    data['previewHeight'] = previewHeight;
    data['webformatURL'] = webformatURL;
    data['webformatWidth'] = webformatWidth;
    data['webformatHeight'] = webformatHeight;
    data['largeImageURL'] = largeImageURL;
    data['fullHDURL'] = fullHDURL;
    data['imageURL'] = imageURL;
    data['imageWidth'] = imageWidth;
    data['imageHeight'] = imageHeight;
    data['imageSize'] = imageSize;
    data['views'] = views;
    data['downloads'] = downloads;
    data['likes'] = likes;
    data['comments'] = comments;
    data['user_id'] = userId;
    data['user'] = user;
    data['userImageURL'] = userImageURL;
    return data;
  }
}
