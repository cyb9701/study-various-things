import { emotionLst } from '../util/constant';
import getEmotionImage from '../util/get-emotion-image';
import './Viewer.css';

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionLst.find((item) => item.emotionId == emotionId);

  return (
    <div className='viewer'>
      <section className='image-section'>
        <h4>오늘의 감정</h4>
        <div className={`emotion-img-wrapper emotion-img-wrapper-${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className='content-section'>
        <h4>오늘의 일기</h4>
        <div className='content-wrapper'>
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
