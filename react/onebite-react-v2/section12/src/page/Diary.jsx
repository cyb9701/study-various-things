import { useNavigate, useParams } from 'react-router-dom';
import Button from '../component/Button';
import Header from '../component/Header';
import Viewer from '../component/Viewer';
import useDiary from '../hook/useDiary';
import usePageTitle from '../hook/usePageTitle';
import { getStringedDate } from '../util/get_stringed-date';

const Diary = () => {
  const { id } = useParams();

  const nav = useNavigate();

  const currentDiaryItem = useDiary(id);

  usePageTitle(`${id}번 일기`);

  if (!currentDiaryItem) {
    return <></>;
  }

  const { createdDate, emotionId, content } = currentDiaryItem;

  return (
    <>
      <Header
        title={`${getStringedDate(new Date(createdDate))} 기록`}
        leftChild={<Button text='< 뒤로가기' onClick={() => nav(-1)} />}
        rightChild={<Button text='수정하기' onClick={() => {}} />}
      />
      <Viewer emotionId={emotionId} content={content} />
    </>
  );
};

export default Diary;
