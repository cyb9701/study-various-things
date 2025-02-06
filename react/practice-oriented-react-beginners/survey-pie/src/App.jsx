import { useState } from 'react';
import ProgressIndicator from './component/ProgressIndicator';
import QuestionBox from './component/QuestionBox';

function App() {
  const questions = [
    {
      title: '질문1',
      description: '설명1',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문2',
      description: '설명2',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문3',
      description: '설명3',
      type: 'text',
      required: false,
      options: {},
    },
  ];

  const step = 0;

  const [answers, setAnswers] = useState(['123']);

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
}

export default App;
