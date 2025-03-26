import React, { useState, useEffect } from 'react'

function TodoList(props) {
    const { tasks, setTasks, setNewTask, previousData } = props;


    function handleEdit(index) {
        setNewTask(tasks[index]);
        handleDelete(index);
    }
    function handleDelete(index) {
        let afterDlt = tasks.filter((_, i) => {
            return (tasks[index] !== tasks[i])
        })
        previousData(afterDlt);
        setTasks(afterDlt)
    }
    function handleUp(index) {
        if (index > 0) {
            [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]]
            previousData([...tasks]);
            setTasks([...tasks]);
        }
    }
    function handleDown(index) {
        if (index < tasks.length - 1) {
            [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]]
            previousData([...tasks]);
            setTasks([...tasks]);
        }
    }
    return (
        <>
            <div className='todolist'>
                <ol>
                    {tasks.map((task, index) => {
                        if (task !== null)
                            return (
                                <li key={index}>
                                    <div className="list_container">
                                        <div className='task'>{task}</div>
                                        <div className='btn_container'>
                                            <button onClick={() => handleEdit(index)}><i class="fa-solid fa-pen-to-square"></i></button>
                                            <button onClick={() => handleDelete(index)}><i class="fa-solid fa-trash-can"></i></button>
                                            <button onClick={() => handleUp(index)}><i class="fa-solid fa-arrow-up"></i></button>
                                            <button onClick={() => handleDown(index)}><i class="fa-solid fa-arrow-down"></i></button>
                                        </div>
                                    </div>
                                </li>)
                    }
                    )}
                </ol>
            </div>
        </>
    )
}
export default TodoList