import React, { useState } from 'react';
import TodoHeader from './components/todoHeader/TodoHeader';
import TodoSearch from './components/todoSearch/TodoSearch';
import TodoList from './components/todoList/TodoList';
import TodoAdd from './components/todoAdd/TodoAdd';

const App = () => {
  const [tododata, setTododata] = useState([
    { id: 1, title: 'Learn React', important: false, done: false },
    { id: 2, title: 'Learn JS', important: false, done: false },
    { id: 3, title: 'Learn Redux', important: false, done: false },
  ]);

  const Delete = (id) => {
    let del = tododata.filter(el => el.id !== id);
    setTododata(del)
  };

  return (
    <div style={{ width: 500 }} className='mx-auto'>
      <TodoHeader />
      <TodoSearch />
      <TodoList tododata={tododata} Delete={Delete} />
      <TodoAdd />
    </div>
  );
};

export default App;



