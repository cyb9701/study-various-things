import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import useCurrentStep from '../hook/useCurrentStep';
import questionsLengthSelector from '../store/question/questionsLengthSelector';
import Button from './Button';

const ActionButtons = () => {
  const navigate = useNavigate();

  const questionsLength = useRecoilValue(questionsLengthSelector);

  const step = useCurrentStep();

  const isLast = questionsLength - 1 === step;

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
            navigate('/done');
          }}
        >
          제출
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
