import axios from 'axios';

const deleteSurvey = (surveyId) => {
  return axios.delete(`/surveys/${surveyId}`).then((res) => {
    alert('삭제되었습니다.');
    return res.data;
  });
};

export default deleteSurvey;
