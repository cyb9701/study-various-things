import { useNavigate } from 'react-router';

const ActionButtons = ({ questionsLength, step }) => {
  const navigate = useNavigate();

  const isLast = questionsLength - 1 === step;

  return (
    <div>
      {step === 0 || (
        <button
          onClick={() => {
            // 절대 경로.
            // navigate(`/survey/1/${step - 1}`);

            // 상대 경로.
            navigate(`${step - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button
          onClick={() => {
            navigate('/done');
          }}
        >
          제출
        </button>
      ) : (
        <button
          onClick={() => {
            // 절대 경로.
            // navigate(`/survey/1/${step + 1}`);

            // 상대 경로.
            navigate(`${step + 1}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
};

export default ActionButtons;
