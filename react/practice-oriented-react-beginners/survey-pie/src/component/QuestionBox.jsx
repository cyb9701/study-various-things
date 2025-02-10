import styled from 'styled-components';
import useCurrentAnswer from '../hook/useCurrentAnswer';
import useCurrentQuestion from '../hook/useCurrentQuestion';
import ActionButtons from './ActionButtons';
import Body from './Body';
import Description from './Description';
import Title from './Title';

const QuestionBox = () => {
  const question = useCurrentQuestion();

  const [answer, setAnswer] = useCurrentAnswer();

  const handleUpdateAnswer = (value) => {
    setAnswer(value);
  };

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Description>{question.description}</Description>
      <Body
        type={question.type}
        answer={answer}
        updateAnswer={handleUpdateAnswer}
        options={question.options}
      />
      <ActionButtons />
    </QuestionBoxWrapper>
  );
};

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default QuestionBox;
