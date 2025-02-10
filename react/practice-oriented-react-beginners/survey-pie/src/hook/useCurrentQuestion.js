import { useRecoilValue } from 'recoil';
import surveySelector from '../store/survey/surveySelector';
import useStep from './useStep';

const useCurrentQuestion = () => {
  const step = useStep();

  const survey = useRecoilValue(surveySelector);

  const questions = survey?.questions ?? [];

  const question = questions[step];

  return question;
};

export default useCurrentQuestion;
