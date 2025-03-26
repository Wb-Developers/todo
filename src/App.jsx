import TodoList from './components/TodoList'
import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function previousData(newTodo){
    localStorage.setItem('list',JSON.stringify(newTodo));
}
useEffect(()=>{
  if(!localStorage){return}
  let previousList = JSON.parse(localStorage.getItem('list'));
  setTasks(previousList);
},[])

function addTodo() {
  if (newTask.length > 0) {
   const newTasks =  [...tasks, newTask]
   previousData(newTasks);
      setTasks(newTasks);
      setNewTask('');
  }
}

  return (
    <>
      <div className="todo_container">
        <TodoInput tasks={tasks} setTasks={setTasks} setNewTask={setNewTask} newTask={newTask} addTodo={addTodo}/>
        <TodoList tasks={tasks} setTasks={setTasks} setNewTask={setNewTask} previousData={previousData}/>
      </div>
    </>
  )
}

export default App
