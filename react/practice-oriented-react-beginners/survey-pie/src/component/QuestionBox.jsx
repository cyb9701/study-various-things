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
    <div>
      <Title>{question.title}</Title>
      <Description>{question.description}</Description>
      <Body type={question.type} answer={answer} updateAnswer={updateAnswer} />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </div>
  );
};

export default QuestionBox;
