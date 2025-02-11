import styled from 'styled-components';

import { useNavigate } from 'react-router';
import congrats from '../assets/congrats.png';
import reload from '../assets/reload.png';
import Button from '../component/Button';
import useSurveyId from '../hook/useSurveyId';

const CompletionPage = () => {
  const navigate = useNavigate();

  const surveyId = useSurveyId();

  const handleReload = () => {
    navigate(`/survey/${surveyId}/0`);
  };

  return (
    <CompletionPageWrapper>
      <img src={congrats} width='209px' height='204' />
      <MidText>설문이 완료되었습니다.</MidText>
      <ReloadButton type='TERTIARY' onClick={handleReload}>
        <img src={reload} width='24' height='24' />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageWrapper>
  );
};

const CompletionPageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const MidText = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 56px;
`;

const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: auto;
`;

export default CompletionPage;
