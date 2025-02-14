import { useDispatch, useSelector } from 'react-redux';
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
} from '../stores/survey/surveySlice';
import AddButton from './AddButton';
import Body from './Boyd';
import Card from './Card';

const PreviewSection = () => {
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.survey.data?.questions || []);

  return (
    <>
      {questions.map((e, index) => (
        <Card
          key={index}
          title={e.title}
          desc={e.desc}
          onUpButtonClicked={(index) => dispatch(moveUpQuestion(index))}
          onDownButtonClicked={(index) => dispatch(moveDownQuestion(index))}
          onDeleteButtonClicked={(index) => dispatch(deleteQuestion(index))}
        >
          <Body type={e.type} options={e.options} />
        </Card>
      ))}
      <AddButton addQuestion={(type) => dispatch(addQuestion(type))} />
    </>
  );
};

export default PreviewSection;
