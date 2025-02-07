import styled from 'styled-components';
import ActionButtons from './ActionButtons';
import Body from './Body';
import Description from './Description';
import Title from './Title';

const QuestionBox = ({
  question,
  questionsLength,
  step,
  answer,
  updateAnswer,
}) => {
  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Description>{question.description}</Description>
      <Body
        type={question.type}
        answer={answer}
        updateAnswer={updateAnswer}
        options={question.options}
      />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </QuestionBoxWrapper>
  );
};

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default QuestionBox;
