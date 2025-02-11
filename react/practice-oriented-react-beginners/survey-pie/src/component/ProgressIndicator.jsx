import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import useAnswers from '../hook/useAnswers';
import useStep from '../hook/useStep';
import questionsLengthSelector from '../store/survey/questionsLengthSelector';
import Bar from './Bar';

const ProgressIndicator = () => {
  const length = useRecoilValue(questionsLengthSelector);

  const [answers] = useAnswers();

  const step = useStep();

  const bars = [];

  for (let i = 0; i < length; i++) {
    let status = 'pending';

    if (i === step) {
      status = 'in-progress';
    } else if (answers[i]) {
      status = 'done';
    }

    bars.push(<Bar key={i} status={status} />);
  }

  return (
    <ProgressIndicatorWrapper>
      {bars}
      <PageCount>
        <span>{step + 1}</span>
        {`/${bars.length}`}
      </PageCount>
    </ProgressIndicatorWrapper>
  );
};

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  position: absolute;
  bottom: calc(100% + 24px);
  width: 100%;
  left: 0;
  align-items: center;
`;

const PageCount = styled.div`
  margin-left: 8px;
  color: #636262;
  font-size: 16px;
  line-height: 19px;

  span {
    font-weight: bold;
    color: #121111;
  }
`;

export default ProgressIndicator;
