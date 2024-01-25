/**
 * Generic in Class
 */
class Pagination<T, K> {
  data: T[] = [];
  message?: K;
  lastFetchedAt?: T;
}

const pgData = new Pagination<number, string>();
pgData.data; // TYPE: number[]
pgData.message; // TYPE: string | undefined
pgData.lastFetchedAt; // TYPE: number | undefined

class Pagination2<T, K> {
  data: T[] = [];
  message?: K;
  lastFetchedAt?: T;

  constructor(data: T[], message?: K, lastFetchedAt?: T) {
    this.data = data;
    this.message = message;
    this.lastFetchedAt = lastFetchedAt;
  }
}

const pgData2 = new Pagination2([1, 2, 3]);
pgData2.data; // TYPE: number[]
pgData2.message; // TYPE: unknown
pgData2.lastFetchedAt; // TYPE: number | undefined

class DefaultGeneric<T = boolean> {
  data: T[] = [];
}
