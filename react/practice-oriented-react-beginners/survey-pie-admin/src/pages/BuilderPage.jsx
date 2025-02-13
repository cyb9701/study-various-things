import { Col, Input, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import MainLayout from '../layouts/MainLayout';
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
  setTitle,
} from '../stores/survey/surveySlice';

const BuilderPage = () => {
  const survey = useSelector((state) => state.survey);

  const dispath = useDispatch();

  return (
    <MainLayout selectedKeys='/builder'>
      <Row>
        <Col flex='auto'>
          <Input
            placeholder='설문 제목을 입력해주세요'
            value={survey.title}
            onChange={(e) => dispath(setTitle(e.target.value))}
          />
          <PreviewSection
            questions={survey.questions}
            onAddButtonClicked={(type) => dispath(addQuestion(type))}
            onUpButtonClicked={(index) => dispath(moveUpQuestion(index))}
            onDownButtonClicked={(index) => dispath(moveDownQuestion(index))}
            onDeleteButtonClicked={(index) => dispath(deleteQuestion(index))}
          />
        </Col>
        <Col flex='350px'>
          <OptionSection />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default BuilderPage;
