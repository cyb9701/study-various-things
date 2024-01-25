/**
 * Partial Type
 */
interface Idol {
  name: string;
  age: number;
  grouName: string;
}

const idol: Idol = {
  name: 'aaa',
  age: 23,
  grouName: 'bbb',
};

function updateIdol(original: Idol, updates: Partial<Idol>): Idol {
  return {
    ...original,
    ...updates,
  };
}

const updatedIdol = updateIdol(idol, {});
const updatedIdol2 = updateIdol(idol, { age: 28 }); // { name: 'aaa', age: 27, grouName: 'bbb' };
// const updatedIdol3 = updateIdol(idol, { go: true }); // ERROR
