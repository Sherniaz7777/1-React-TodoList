import React from 'react';
import TodoListitem from '../todoListitem/TodoListitem';
import './TodoList.css'

const TodoList = (props) => {
  const  Delete  = props.Delete;
  const ImpTodo = props.ImpTodo
  const DoneTodo = props.DoneTodo

  if (props.tododata.length === 0) {
    return <p>No definite</p>;
  }

  const elements = props.tododata.map(el => (
    <li className='list-group-item' key={el.id}>
      <TodoListitem title={el.title}  Delete={() => Delete(el.id)}  ImpTodo={() => ImpTodo(el.id)} important={el.important} DoneTodo={() => DoneTodo(el.id)}  done={el.done} allTodo={props.tododata}/>
    </li>
  ));

  return (
    <ul className='list-group'>
      {elements}
    </ul>
  );
}

export default TodoList;

