import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './Editor.css';
import EmotionItem from './EmotionItem';

const emotionLst = [
  { emotionId: 1, emotionName: '완전 좋음' },
  { emotionId: 2, emotionName: '좋음' },
  { emotionId: 3, emotionName: '그럭저럭' },
  { emotionId: 4, emotionName: '나쁨' },
  { emotionId: 5, emotionName: '끔찍함' },
];

const getStringedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({ ...input, [name]: value });
  };

  return (
    <div className='editor'>
      <section className='date-section'>
        <h4>오늘의 날짜</h4>
        <input
          type='date'
          value={getStringedDate(input.createdDate)}
          onChange={handleInputChange}
        />
      </section>
      <section className='emotion-section'>
        <h4>오늘의 감정</h4>
        <div className='emotion-list-wrapper'>
          {emotionLst.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
              onChange={(emotionId) =>
                handleInputChange({
                  target: { name: 'emotionId', value: emotionId },
                })
              }
            />
          ))}
        </div>
      </section>
      <section className='content-section'>
        <h4>오늘의 일기</h4>
        <textarea
          name='content'
          placeholder='오늘은 어땠나요?'
          onChange={handleInputChange}
        ></textarea>
      </section>
      <section className='button-section'>
        <Button text='취소하기' onClick={() => nav(-1)} />
        <Button
          text='작성하기'
          type='POSITIVE'
          onClick={() => onSubmit(input)}
        />
      </section>
    </div>
  );
};

export default Editor;
