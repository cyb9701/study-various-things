import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionLst } from '../util/constant';
import { getStringedDate } from '../util/get_stringed-date';
import Button from './Button';
import './Editor.css';
import EmotionItem from './EmotionItem';

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  useEffect(() => {
    if (!initData) return;

    setInput({ ...initData, createdDate: new Date(initData.createdDate) });
  }, [initData]);

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
          name='createdDate'
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
          value={input.content}
          placeholder='오늘은 어땠나요?'
          onChange={handleInputChange}
        ></textarea>
      </section>
      <section className='button-section'>
        <Button text='취소하기' onClick={() => nav(-1)} />
        <Button
          text='작성완료'
          type='POSITIVE'
          onClick={() => {
            if (!input.content) return;
            onSubmit(input);
          }}
        />
      </section>
    </div>
  );
};

export default Editor;
