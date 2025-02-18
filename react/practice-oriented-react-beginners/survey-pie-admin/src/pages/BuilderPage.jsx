import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import BuildTitleInput from '../components/BuilderTitleInput';
import FloatingButton from '../components/FloatingButton';
import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import MainLayout from '../layouts/MainLayout';
import fetchSurvey from '../services/fetchSurvey';
import { setSelectedQuestionId } from '../stores/selectedQuestionId/selectedQuestionIdSlice';
import { setSurvey } from '../stores/survey/surveySlice';

const BuilderPage = () => {
  const params = useParams();

  const loading = useSelector((state) => state.survey.loading);

  const error = useSelector((state) => state.survey.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!params.surveyId) {
      dispatch(
        setSurvey({
          title: '',
          questions: [],
        }),
      );
      dispatch(setSelectedQuestionId(null));
    } else {
      dispatch(fetchSurvey(params.surveyId));
    }
  }, [dispatch, params.surveyId]);

  if (error) {
    return <>{error}</>;
  }

  if (loading) {
    return <>loading</>;
  }

  return (
    <MainLayout selectedKeys='/builder' padding='0'>
      <Row style={{ height: '100%' }}>
        <Col flex='auto' style={{ padding: 30 }}>
          <BuildTitleInput />
          <PreviewSection />
        </Col>
        <Col flex='350px'>
          <OptionSection />
        </Col>
      </Row>
      <FloatingButton />
    </MainLayout>
  );
};

export default BuilderPage;
