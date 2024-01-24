/**
 * Visibility Keyword
 *
 * 1) public (기본값) - 어디서든 접근이 가능하다.
 * 2) protected - 현재 클래스 및 하위(자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근 가능하다.
 */
class PropertyTestParent {
  public publicProperty = '';
  protected protectedProperty = '';
  private privateProperty = '';
  #jsPrivateProperty = '';

  test() {
    this.publicProperty;
    this.protectedProperty;
    this.privateProperty;
    this.#jsPrivateProperty;
  }
}

class PropertyTestChild extends PropertyTestParent {
  test1() {
    this.publicProperty;
    this.protectedProperty;
    // this.privateProperty; // ERROR
    // this.#jsPrivateProperty; // ERROR
  }
}

const instance = new PropertyTestParent();
instance.publicProperty;
// instance.protectedProperty; // ERROR
// instance.privateProperty; // ERROR
// instance.#jsPrivateProperty; // ERROR
