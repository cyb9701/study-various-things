import { useRecoilState } from 'recoil';
import answersAtom from '../store/answer/answersAtom';

const useAnswers = () => {
  return useRecoilState(answersAtom);
};

export default useAnswers;
