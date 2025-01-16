import { useRef, useState } from 'react';
import './App.css';
import Editor from './component/Editor';
import Header from './component/Header';
import List from './component/List';

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(null);

  const handleCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };

  const handleDone = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id !== id ? todo : { ...todo, isDone: !todo.isDone };
    });

    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='app'>
      <Header />
      <Editor onCreate={handleCreate} />
      <List todos={todos} onDone={handleDone} onDelete={handleDelete} />
    </div>
  );
}

export default App;
