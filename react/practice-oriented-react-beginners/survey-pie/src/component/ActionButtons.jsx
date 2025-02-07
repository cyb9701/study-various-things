import { useNavigate } from 'react-router';
import Button from './Button';

const ActionButtons = ({ questionsLength, step }) => {
  const navigate = useNavigate();

  const isLast = questionsLength - 1 === step;

  return (
    <div>
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
    </div>
  );
};

export default ActionButtons;
