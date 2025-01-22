import getEmotionImage from '../util/get-emotion-image';
import './EmotionItem.css';

const EmotionItem = ({ emotionId, emotionName, isSelected, onChange }) => {
  return (
    <div
      className={`emotion-item ${
        isSelected ? `emotion-item-on-${emotionId}` : ''
      }`}
      onClick={() => onChange(emotionId)}
    >
      <img className='emotion-img' src={getEmotionImage(emotionId)} />
      <div className='emotion-name'>{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
