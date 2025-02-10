import { selector } from 'recoil';
import surveySelector from './surveySelector';

const questionsLengthSelector = selector({
  key: 'questionsLengthSelector',
  get: ({ get }) => {
    const questions = get(surveySelector).questions;

    return questions.length;
  },
});

export default questionsLengthSelector;
