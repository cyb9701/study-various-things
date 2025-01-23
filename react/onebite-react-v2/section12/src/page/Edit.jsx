import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import Button from '../component/Button';
import Editor from '../component/Editor';
import Header from '../component/Header';
import useDiary from '../hook/useDiary';

const Edit = () => {
  const { id } = useParams();

  const dispatch = useContext(DiaryDispatchContext);

  const nav = useNavigate();

  const currentDiaryItem = useDiary(id);

  const handleDelete = () => {
    const result = window.confirm(
      '일기를 정말 삭제할까요? 다시 복구되지 않아요!'
    );
    if (!result) return;

    dispatch.handleDelete(id);

    nav('/', { replace: true });
  };

  const handleEdit = (input) => {
    dispatch.handleEdit(
      id,
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );

    nav('/', { replace: true });
  };

  if (!currentDiaryItem) {
    return <></>;
  }

  return (
    <>
      <Header
        title='일기 수정하기'
        leftChild={<Button text='< 뒤로가기' onClick={() => nav(-1)} />}
        rightChild={
          <Button text='삭제하기' type='NEGATIVE' onClick={handleDelete} />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={handleEdit} />
    </>
  );
};

export default Edit;
