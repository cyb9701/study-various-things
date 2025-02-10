import { useParams } from 'react-router';

const useStep = () => {
  const params = useParams();

  const step = parseInt(params.step);

  return step;
};

export default useStep;
