import { useState } from 'react';
import { useParams } from 'react-router';
import ProgressIndicator from '../component/ProgressIndicator';
import QuestionBox from '../component/QuestionBox';

const SurveyPage = () => {
  const params = useParams();

  const step = parseInt(params.step);

  const questions = [
    {
      title: '질문1',
      description: '설명1',
      type: 'text',
      required: false,
      options: {
        placeholder: '10자 이내로 단답해주세요',
      },
    },
    {
      title: '질문2',
      description: '설명2',
      type: 'textarea',
      required: false,
      options: {
        placeholder: '400자 이내로 답해주세요',
      },
    },
    {
      title: '질문3',
      description: '설명3',
      type: 'select',
      required: false,
      options: {
        items: ['1', '2', '3', '4'],
      },
    },
  ];

  const [answers, setAnswers] = useState([]);

  const handleUpdateAnswer = (value) => {
    setAnswers((preAnswers) => {
      const newValues = [...preAnswers];
      newValues[step] = value;
      return newValues;
    });
  };

  return (
    <>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        updateAnswer={handleUpdateAnswer}
      />
    </>
  );
};

export default SurveyPage;
