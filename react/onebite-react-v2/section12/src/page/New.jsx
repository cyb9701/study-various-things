import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import Button from '../component/Button';
import Editor from '../component/Editor';
import Header from '../component/Header';

const New = () => {
  const nav = useNavigate();

  const dispatch = useContext(DiaryDispatchContext);

  const handleSubmit = (input) => {
    if (!input.content) return;

    dispatch.handleCreate(
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );

    nav('/', { replace: true });
  };

  return (
    <>
      <Header
        title='새 일기 쓰기'
        leftChild={<Button text='< 뒤로가기' onClick={() => nav(-1)} />}
      />
      <Editor onSubmit={handleSubmit} />
    </>
  );
};

export default New;
