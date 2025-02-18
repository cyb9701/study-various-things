import axios from 'axios';

const putSurvey = (survey) => {
  return axios.put(`/surveys/${survey.id}`, survey).then((res) => {
    alert('저장되었습니다.');
    return res.data;
  });
};

export default putSurvey;
