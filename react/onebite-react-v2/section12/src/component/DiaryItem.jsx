import { useNavigate } from 'react-router-dom';
import getEmotionImage from '../util/get-emotion-image';
import Button from './Button';
import './DiaryItem.css';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  return (
    <div className='diary-item'>
      <div
        className={`image-section id-${emotionId}`}
        onClick={() => nav(`/diary/${id}`)}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className='info-section' onClick={() => nav(`/diary/${id}`)}>
        <div className='created-date'>
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className='content'>{content}</div>
      </div>
      <div className='button-section'>
        <Button text='수정하기' onClick={() => nav(`/edit/${id}`)} />
      </div>
    </div>
  );
};

export default DiaryItem;
