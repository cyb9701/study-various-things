void main() {
  final parent = Parent(id: 1);
  print(parent.id); // 1

  final child = Child(id: 2);
  print(child.id); // 2

  final parent2 = Parent.fromInt(5);
  print(parent2.id); // 5

  final parent3 = Parent.fromChild(5);
  print(parent3); // Instance of 'Child'
}

class Parent {
  final int id;

  Parent({
    required this.id,
  });

  factory Parent.fromInt(int id) {
    return Parent(id: id);
  }

  /**
   * 현재 클래스의 인스턴스 뿐만 아니라
   * 현재 클래스를 상속하고 있는 클래스도 인스턴스를 반환할 수 있다.
   */
  factory Parent.fromChild(int id) {
    return Child(id: id);
  }
}

class Child extends Parent {
  Child({
    required super.id,
  });
}
