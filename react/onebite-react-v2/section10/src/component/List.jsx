import { useMemo, useState } from 'react';
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

  // const getAnalyzedData = () => {
  //   console.log('🍀List:37🍀', '호출');

  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todos) => todos.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   return { totalCount, doneCount, notDoneCount };
  // };

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('🍀List:37🍀', '호출');

    const totalCount = todos.length;
    const doneCount = todos.filter((todos) => todos.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className='list'>
      <h4>Todo List 🌱</h4>

      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>not done: {notDoneCount}</div>
      </div>
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
