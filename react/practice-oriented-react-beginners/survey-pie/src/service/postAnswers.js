import mainApi from './api/mainApi';

const postAnswers = (surveyId, data) => {
  mainApi.post('/answers', {
    surveyId,
    data,
  });
};

export default postAnswers;
