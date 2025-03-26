import React, { useState } from 'react'
function TodoInput(props) {
    const { tasks, setTasks, newTask, setNewTask, addTodo } = props;

   
    function handleValueChg(e) {
        setNewTask(e.target.value);
    }
    
    return (
        <div className='todoInput'>
            <input type="text" value={newTask}   onKeyDown={(e)=>e.key === 'Enter' ? addTodo() :''} onChange={(e) => handleValueChg(e)} placeholder='Enter Todo..' id="inputValue" />
            <button onClick={addTodo}>ADD</button>
        </div>
    )
}
export default TodoInput