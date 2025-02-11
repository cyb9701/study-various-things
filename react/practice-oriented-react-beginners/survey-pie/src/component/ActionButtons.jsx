import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import useAnswers from '../hook/useAnswers';
import useRequiredOption from '../hook/useRequiredOption';
import useStep from '../hook/useStep';
import useSurveyId from '../hook/useSurveyId';
import postAnswers from '../service/postAnswers';
import questionsLengthSelector from '../store/survey/questionsLengthSelector';
import Button from './Button';

const ActionButtons = () => {
  const navigate = useNavigate();

  const questionsLength = useRecoilValue(questionsLengthSelector);

  const [answers, setAnswers] = useAnswers();

  const step = useStep();

  const surveyId = useSurveyId();

  const isRequired = useRequiredOption();

  const isLast = questionsLength - 1 === step;

  const [isLoading, setIsLoading] = useState(false);

  const disabledButton = isRequired ? !answers[step]?.length : false;

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type='SECONDARY'
          onClick={() => {
            // 절대 경로.
            // navigate(`/survey/1/${step - 1}`);

            // 상대 경로.
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type='PRIMARY'
          onClick={() => {
            setIsLoading(true);
            postAnswers(surveyId, answers)
              .then((_) => {
                setAnswers([]);
                navigate(`/done/${surveyId}`);
              })
              .catch((e) => {
                setIsLoading(false);
                console.log('🍀ActionButtons:49🍀', e);
              });
          }}
          disabled={isLoading || disabledButton}
        >
          {isLoading ? '제출 중입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          type='PRIMARY'
          onClick={() => {
            // 절대 경로.
            // navigate(`/survey/1/${step + 1}`);

            // 상대 경로.
            navigate(`${step + 1}`);
          }}
          disabled={disabledButton}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
};

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export default ActionButtons;
