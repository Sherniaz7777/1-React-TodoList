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

  const ImpTodo = (id) =>{
    const index=tododata.findIndex(el=>el.id === id)
    const todo=tododata[index]
    const updTodo={...todo, important: !todo.important}
    const before=tododata.slice(0, index)
    const after=tododata.slice(index+1)
    setTododata([...before, updTodo, ...after])  
  }

  const DoneTodo = (id) =>{
    console.log(id);
    const index=tododata.findIndex(el=>el.id === id)
    const todo=tododata[index]
    const updTodo={...todo, done: !todo.done}
    console.log(updTodo);
    const before=tododata.slice(0, index)
    const after=tododata.slice(index+1)
    setTododata([...before, updTodo, ...after])  
  }
  
  
  const addNewTodo=(text)=>{
    let mapId = tododata.map(el=>el.id)
    
    const newTodo={title:text, important:false, done:false, id:mapId.at(-1)+1 || 1}
    console.log(newTodo);
    text=''
    setTododata([...tododata, newTodo])
  }

  return (
    <div style={{ width: 500 }} className='mx-auto'>
      <TodoHeader />
      <TodoSearch />
      <TodoList tododata={tododata} Delete={Delete}  ImpTodo={ImpTodo} DoneTodo={DoneTodo}/>
      <TodoAdd onAddTodo={addNewTodo} />
    </div>
  );
};

export default App;



