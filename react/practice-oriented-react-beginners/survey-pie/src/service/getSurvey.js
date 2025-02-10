import mainApi from './api/mainApi';

const getSurvey = (surveyId) => {
  return mainApi.get(`/surveys/${surveyId}`);
};

export default getSurvey;
