import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import DiaryItem from './DiaryItem';
import './DiaryList.css';

const DiaryList = ({ data }) => {
  const LATEST = 'latest';
  const OLDEST = 'oldest';

  const nav = useNavigate();

  const [sortType, setSortType] = useState(LATEST);

  const handleSortTypeChange = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === OLDEST) {
        return a.createdDate - b.createdDate;
      } else {
        return b.createdDate - a.createdDate;
      }
    });
  };

  return (
    <div className='diary-list'>
      <div className='menu-bar'>
        <select onChange={handleSortTypeChange}>
          <option value={LATEST}>최신순</option>
          <option value={OLDEST}>오래된 순</option>
        </select>
        <Button
          text='새로운 읽기 쓰기'
          type='POSITIVE'
          onClick={() => nav('/new')}
        />
      </div>
      <div className='list-wrapper'>
        {getSortedData().map((item) => (
          <DiaryItem key={item.id} {...item} />

          // <DiaryItem
          //   key={item.id}
          //   id={item.id}
          //   emotionId={item.emotionId}
          //   createdDate={item.createdDate}
          //   content={item.content}
          // />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
