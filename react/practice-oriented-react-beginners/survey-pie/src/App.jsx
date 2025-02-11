import { Route, Routes } from 'react-router';
import styled from 'styled-components';
import CompletionPage from './page/CompletionPage';
import SurveyPage from './page/SurveyPage';

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path='/survey/:surveyId' element={<SurveyPage />}>
            <Route path=':step' element={<SurveyPage />} />
          </Route>
          <Route path='/done/:surveyId' element={<CompletionPage />} />
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Box = styled.div`
  width: 700px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;

export default App;
