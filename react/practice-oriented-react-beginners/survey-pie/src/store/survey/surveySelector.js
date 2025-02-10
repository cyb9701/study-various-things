import { selector } from 'recoil';
import getSurvey from '../../service/getSurvey';

const surveySelector = selector({
  key: 'surveySelector',
  get: async () => {
    const pathName = window.location.pathname;

    const surveyId = pathName.split('/')[2];

    const res = await getSurvey(surveyId);

    return res.data;
  },
});

export default surveySelector;
