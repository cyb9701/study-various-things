import { selector } from 'recoil';
import questionsAtom from './questionsAtom';

const questionsLengthSelector = selector({
  key: 'questionsLengthSelector',
  get: ({ get }) => {
    const questions = get(questionsAtom);
    return questions.length;
  },
});

export default questionsLengthSelector;
