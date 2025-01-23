import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryStateContext } from '../App';

const useDiary = (id) => {
  const state = useContext(DiaryStateContext);

  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  const nav = useNavigate();

  useEffect(() => {
    const result = state.find((item) => item.id == id);

    if (!result) {
      window.alert('존재하지 않는 일기입니다.');

      nav('/', { replace: true });
      return;
    }

    setCurrentDiaryItem(result);
  }, [id]);

  return currentDiaryItem;
};

export default useDiary;
