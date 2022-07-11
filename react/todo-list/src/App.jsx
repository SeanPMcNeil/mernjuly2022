import { useState } from 'react';
import './App.css';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  
  const addTodo = (todo) => {
    let copy = [...todoList];
    copy = [...copy, { "id": todoList.length + 1, "task": todo, "complete": false }];
    setTodoList(copy);
  }

  const handleCheck = (todo) => {
    let mapped = todoList.map( task => {
        return task.id === todo.id ? { ...task, complete: !task.complete } : { ...task };
    })
    setTodoList(mapped);
}

  const removeTask = todo => {
    let filtered = todoList.filter( task => task.id !== todo.id)
    setTodoList(filtered);
  }

  return (
    <div className="App">
      <ToDoForm addTodo={ addTodo } />
      <ToDoList todoList={ todoList } handleCheck={ handleCheck } removeTask={ removeTask }/>
    </div>
  );
}

export default App;
