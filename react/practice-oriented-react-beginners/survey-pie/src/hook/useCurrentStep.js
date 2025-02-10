import { useParams } from 'react-router';

const useCurrentStep = () => {
  const params = useParams();

  const step = parseInt(params.step);

  return step;
};

export default useCurrentStep;
