import React, { useState} from 'react';
import TodoHeader from './components/todoHeader/TodoHeader';
import TodoSearch from './components/todoSearch/TodoSearch';
import TodoList from './components/todoList/TodoList';
import TodoAdd from './components/todoAdd/TodoAdd';

const App = () => {
  const initialTodos = [
    { id: 1, title: 'Learn React', important: false, done: false },
    { id: 2, title: 'Learn JS', important: false, done: false },
    { id: 3, title: 'Learn Redux', important: false, done: false },
  ];

  const [tododata, setTododata] = useState(initialTodos);
  const [filter, setFilter] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleSearchInput = (text) => {
    setSearchText(text);
  };
  const onSetFilter = (status) => {
    setFilter(status);
  };

  const filterFun = (array, status) => {
    switch (status) {
      case 'all':
        return array;
      case 'active':
        return array.filter((el) => !el.done);
      case 'done':
        return array.filter((el) => el.done);
      default:
        return array;
    }
  };
  const Delete = (id) => {
    let del = tododata.filter((el) => el.id !== id);
    setTododata(del);
  };



  const ImpTodo = (id) => {
    const index = tododata.findIndex((el) => el.id === id);
    const todo = tododata[index];
    const updTodo = { ...todo, important: !todo.important };
    const before = tododata.slice(0, index);
    const after = tododata.slice(index + 1);
    setTododata([...before, updTodo, ...after]);
  };

  const DoneTodo = (id) => {
    const index = tododata.findIndex((el) => el.id === id);
    const todo = tododata[index];
    const updTodo = { ...todo, done: !todo.done };
    const before = tododata.slice(0, index);
    const after = tododata.slice(index + 1);
    setTododata([...before, updTodo, ...after]);
  };

  const handleEditToggle = (id) => {
    setEditingTodoId(prevId => prevId === id ? null : id);
  };

  const handleTodoInputChange = (e) => {
    setEditedText(e.target.value.trim());
  };

  const handleTodoSaveEdit = (id) => {
    const updatedTodos = tododata.map(todo =>
      todo.id === id ? { ...todo, title: editedText } : todo
    );
    setTododata(updatedTodos);
    setEditingTodoId(null);
  };
  

  const done = tododata.filter((el) => el.done).length;
  const allTodo = tododata.length - done;

  const filteredTodos = tododata.filter(todo =>
    todo.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const newData = filterFun(filteredTodos, filter);

  const addNewTodo = (text) => {
    let mapId = tododata.map((el) => el.id);
    const newTodo = { title: text, important: false, done: false, id: mapId.at(-1) + 1 || 1 };
    setTododata([...tododata, newTodo]);
  };

  return (
    <div style={{ width: 500 }} className='mx-auto'>
      <TodoHeader done={done} all={allTodo} />
      <TodoSearch  onSetFilter={onSetFilter} filter={filter} handleSearchInput={handleSearchInput}/>
      <TodoList
        tododata={newData}
        Delete={Delete}
        ImpTodo={ImpTodo}
        DoneTodo={DoneTodo}
        onEditToggle={handleEditToggle}
        onInputChange={handleTodoInputChange}
        onSaveEdit={handleTodoSaveEdit}
        editingTodoId={editingTodoId}
        editedText={editedText}
      />
      <TodoAdd onAddTodo={addNewTodo} />
    </div>
  );
};

export default App;





