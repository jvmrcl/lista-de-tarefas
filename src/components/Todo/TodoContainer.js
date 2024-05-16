import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import FormView from './presentation/FormView'
import ListView from './presentation/ListView';

const TodoContainer = () => {
  const [tasks, setTasks] = useState([]);
  const iref = useRef();

  const addTask = (e) => {
    e.preventDefault();

    const regex = /^$|^.*(<\s*script\s*>)|^.*(<\s*\/\s*script\s*>).*$/;
    const task = iref.current.childNodes[1].childNodes[0].value;

    if(regex.test(task)) return alert("Ooops! É necessário informar uma tarefa válida");

    return setTasks((prevTasks) => [...prevTasks, {
      id: uuidv4(), content: task, completed: false }],
        iref.current.childNodes[1].childNodes[0].value = null);
  }

  const editTask = (id) => {
    const newContent = window.prompt("Qual é a sua tarefa agora?");
    
    return newContent && newContent.trim() !== "" ?
      setTasks(tasks.map(task => task.id === id ?
        {...task, content: newContent} : task)) : tasks;
  }  
  
  const checkStatus = (id) => {
    return setTasks(tasks.map(task => task.id === id ?
      {...task, completed: !task.completed} : task));
  }

  const clearTask = () => {
    return setTasks(tasks.filter(task => !task.completed));
  }

  return [
    <FormView iref={iref} addTask={addTask} />,
    <ListView tasks={tasks} check={checkStatus} edit={editTask} remove={clearTask} />
  ]
}

export default TodoContainer