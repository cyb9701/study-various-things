import { useReducer, useRef } from 'react';
import './App.css';
import Editor from './component/Editor';
import Header from './component/Header';
import List from './component/List';

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];

    case 'UPDATE': {
      const updatedTodos = state.map((todo) => {
        return todo.id !== action.data
          ? todo
          : { ...todo, isDone: !todo.isDone };
      });

      return updatedTodos;
    }

    case 'DELETE':
      return state.filter((todo) => todo.id !== action.data);
  }
};

function App() {
  const [state, dispatch] = useReducer(todosReducer, []);
  const idRef = useRef(null);

  const handleCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const handleDone = (id) => {
    dispatch({
      type: 'UPDATE',
      data: id,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: id,
    });
  };

  return (
    <div className='app'>
      <Header />
      <Editor onCreate={handleCreate} />
      <List todos={state} onDone={handleDone} onDelete={handleDelete} />
    </div>
  );
}

export default App;
