import { useDispatch, useSelector } from 'react-redux';
import { setSelectedQuestionId } from '../stores/selectedQuestionId/selectedQuestionIdSlice';
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
} from '../stores/survey/surveySlice';
import AddButton from './AddButton';
import Body from './Body';
import Card from './Card';

const PreviewSection = () => {
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.survey.data?.questions);

  const selectedQuestionId = useSelector(
    (state) => state.selectedQuestionId.data,
  );

  if (!questions) {
    return <></>;
  }

  return (
    <>
      {questions.map((e, index) => (
        <Card
          key={index}
          title={e.title}
          desc={e.desc}
          onUpButtonClicked={() => dispatch(moveUpQuestion(index))}
          onDownButtonClicked={() => dispatch(moveDownQuestion(index))}
          onDeleteButtonClicked={() => dispatch(deleteQuestion(index))}
          onClick={() => dispatch(setSelectedQuestionId(index))}
          isSelected={selectedQuestionId === index}
        >
          <Body type={e.type} options={e.options} />
        </Card>
      ))}
      <AddButton addQuestion={(type) => dispatch(addQuestion(type))} />
    </>
  );
};

export default PreviewSection;
