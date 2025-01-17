import { memo } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onDone, onDelete }) => {
  const handleChange = () => {
    onDone(todo.id);
  };

  const handleClick = () => {
    onDelete(todo.id);
  };

  return (
    <div className='todo-item'>
      <input type='checkbox' checked={todo.isDone} onChange={handleChange} />
      <div className='content'>{todo.content}</div>
      <div className='date'>{new Date(todo.date).toLocaleDateString()}</div>
      <button onClick={handleClick}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC)
export default memo(TodoItem, (previous, next) => {
  // 변화값에 따라, props가 바뀌었는지 안바뀌었는지 판단.
  // True: Props 바뀌지 않음 --> 리랜더링 X.
  // False: Props 바뀜 --> 리랜더링 O.
  if (previous.todo.id !== next.todo.id) return false;
  if (previous.todo.isDone !== next.todo.isDone) return false;
  if (previous.todo.content !== next.todo.content) return false;
  if (previous.todo.date !== next.todo.date) return false;
  return true;
});
