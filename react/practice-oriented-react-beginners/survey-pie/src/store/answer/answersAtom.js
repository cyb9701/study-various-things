import { atom } from 'recoil';

const answersAtom = atom({
  key: 'answersAtom',
  default: [],
});

export default answersAtom;
