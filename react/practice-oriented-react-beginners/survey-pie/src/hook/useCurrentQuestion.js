import { useRecoilValue } from 'recoil';
import questionsAtom from '../store/question/questionsAtom';
import useCurrentStep from './useCurrentStep';

const useCurrentQuestion = () => {
  const step = useCurrentStep();

  const questions = useRecoilValue(questionsAtom);

  const question = questions[step];

  return question;
};

export default useCurrentQuestion;
