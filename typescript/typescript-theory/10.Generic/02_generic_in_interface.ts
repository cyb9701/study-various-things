/**
 * Generic in Interface
 */
interface Cache<T> {
  data: T[];
  lastUpdate: Date;
}

const cache1: Cache<string> = {
  data: ['1', '2', '3'],
  lastUpdate: new Date(),
};

const cache2: Cache<number> = {
  data: [1, 2, 3],
  lastUpdate: new Date(),
};

interface DefaultGeneric<T = string> {
  data: T[];
}

const cache3: DefaultGeneric<number> = {
  data: [1, 2, 3, 4],
};
