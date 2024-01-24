/**
 * Abstract Class
 */
abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// const modelWithId = new ModelWithId(1); // ERROR

class Product extends ModelWithId {}
const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
  abstract shout(id: number): string;
}
class Person extends ModelWithAbstractMethod {
  shout(id: number): string {
    return id.toString();
  }
}
