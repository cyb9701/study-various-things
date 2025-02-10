import { useRecoilState } from 'recoil';
import answersAtom from '../store/answer/answersAtom';
import useCurrentStep from './useCurrentStep';

const useCurrentAnswer = () => {
  const step = useCurrentStep();

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
