import mainApi from './api/mainApi';

const postAnswers = (surveyId, data) => {
  return mainApi.post('/answers', {
    surveyId,
    data,
  });
};

export default postAnswers;
