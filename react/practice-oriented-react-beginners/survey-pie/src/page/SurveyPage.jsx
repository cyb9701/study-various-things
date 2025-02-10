import { Suspense } from 'react';
import ProgressIndicator from '../component/ProgressIndicator';
import QuestionBox from '../component/QuestionBox';

const SurveyPage = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <ProgressIndicator />
      <QuestionBox />
    </Suspense>
  );
};

export default SurveyPage;
