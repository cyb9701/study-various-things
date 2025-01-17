import { useState } from 'react';
import './List.css';
import TodoItem from './TodoItem';

const List = ({ todos, onDone, onDelete }) => {
  const [search, setSearch] = useState('');

  const handleChange = (value) => {
    setSearch(value.target.value);
  };

  const getFilteredTodos = () => {
    let filterdTodos;

    if (!search) {
      filterdTodos = todos;
    } else {
      filterdTodos = todos.filter((todo) =>
        todo.content.toLowerCase().includes(search.toLowerCase())
      );
    }

    filterdTodos.sort((a, b) => {
      if (!a.isDone && b.isDone) {
        return -1;
      } else if (a.isDone && !b.isDone) {
        return 1;
      } else {
        return 0;
      }
    });

    return filterdTodos;
  };

  return (
    <div className='list'>
      <h4>Todo List 🌱</h4>
      <input
        type='text'
        placeholder='검색어를 입력하세요'
        value={search}
        onChange={handleChange}
      />
      <div>
        {getFilteredTodos().map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDone={onDone}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
