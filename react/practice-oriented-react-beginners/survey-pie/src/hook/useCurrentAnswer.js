import { useRecoilState } from 'recoil';
import answersAtom from '../store/answer/answersAtom';
import useStep from './useStep';

const useCurrentAnswer = () => {
  const step = useStep();

  const [answers, setAnswers] = useRecoilState(answersAtom);

  const answer = answers[step];

  const setAnswer = (value) => {
    setAnswers((preAnswers) => {
      const newValues = [...preAnswers];
      newValues[step] = value;
      return newValues;
    });
  };

  return [answer, setAnswer];
};

export default useCurrentAnswer;
