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

export default TodoItem;
