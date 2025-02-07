import { Route, Routes } from 'react-router';
import CompletionPage from './page/CompletionPage';
import SurveyPage from './page/SurveyPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/survey/:surveyId' element={<SurveyPage />}>
          <Route path=':step' element={<SurveyPage />} />
        </Route>
        <Route path='/done' element={<CompletionPage />} />
      </Routes>
    </>
  );
}

export default App;
