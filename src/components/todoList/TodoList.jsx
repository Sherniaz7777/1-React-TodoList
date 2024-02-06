import React from 'react';
import TodoListitem from '../todoListitem/TodoListitem';

const TodoList = (props) => {
  const  Delete  = props.Delete;

  const elements = props.tododata.map(el => (
    <li className='list-group-item' key={el.id}>
      <TodoListitem title={el.title}  Delete={() => Delete(el.id)} />
    </li>
  ));

  return (
    <ul className='list-group'>
      {elements}
    </ul>
  );
}

export default TodoList;
