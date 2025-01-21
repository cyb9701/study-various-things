import getEmotionImage from '../util/get-emotion-image';
import Button from './Button';
import './DiaryItem.css';

const DiaryItem = () => {
  const emotionId = 5;

  return (
    <div className='diary-item'>
      <div className={`image-section id-${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className='info-section'>
        <div className='created-date'>{new Date().toLocaleDateString()}</div>
        <div className='content'>123123</div>
      </div>
      <div className='button-section'>
        <Button text='수정하기' onClick={() => {}} />
      </div>
    </div>
  );
};

export default DiaryItem;
