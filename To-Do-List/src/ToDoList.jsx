import React from 'react'
import { useState } from 'react'
import './ToDoList.css';


const ToDoList = () => {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function inputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask === '') {
            alert('Please enter a task')
            return
        }
        else {
            setTasks(currTask => [...currTask, newTask])
            setNewTask('')
        }

    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, ind) => index !== ind)
        setTasks(updatedTasks)
    }

    function moveUp(index) {
        const updatedTasks = [...tasks]
        if (index > 0) {
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }

    function moveDown(index) {
        const updatedTasks = [...tasks]
        if (index < updatedTasks.length-1) {
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }

    return (
        <div className='to-do-list'>

            <h1>To Do List</h1>

            <div>
                <input type="text" placeholder='Enter the task here..'
                    value={newTask} onChange={inputChange}
                />
                <button className='add-button' onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-button' onClick={() => moveUp(index)}>Up</button>
                        <button className='delete-button' onClick={() => moveDown(index)}>Down</button>

                    </li>
                )}

            </ol>

        </div>
    )
}

export default ToDoList