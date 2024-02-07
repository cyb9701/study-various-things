import 'dart:convert';

import '../const/data.dart';

class DataUtils {
  static String pathToUrl(String value) {
    return '$ip$value';
  }

  static List<String> listPathsToUrls(List values) {
    return values.map((e) => pathToUrl(e)).toList();
  }

  static String plainToBase64(String plain) {
    Codec<String, String> stringToBase64 = utf8.fuse(base64);
    String encoded = stringToBase64.encode(plain);
    return encoded;
  }

  static DateTime stringToDateTime(String value) {
    return DateTime.parse(value);
  }
}
