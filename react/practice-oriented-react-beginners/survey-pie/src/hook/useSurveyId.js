import { useParams } from 'react-router';

const useSurveyId = () => {
  const params = useParams();

  const surveyId = parseInt(params.surveyId);

  return surveyId;
};

export default useSurveyId;
