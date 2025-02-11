import useCurrentQuestion from './useCurrentQuestion';

const useRequiredOption = () => {
  const question = useCurrentQuestion();
  return question.required || false;
};

export default useRequiredOption;
