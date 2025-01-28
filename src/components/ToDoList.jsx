import React, {useState}  from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

 function hadleInputChange(event){
setNewTask(event.target.value);
 }

 function addTask(){
    if (newTask.trim() !== "") {
        setTasks([...tasks, newTask]);
        setNewTask("");
    }
 }

    function deleteTask(index) {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
 }



    function moveTaskUp(index) {
        if (index === 0) return;
        const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
    setTasks(newTasks); 
 }


 function moveTaskDown(index){
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
    setTasks(newTasks);
    
 }


  return (
<div className="to-do-list">

    <h1>To Do List</h1>

    <div>
        <input
        type="text"
        placeholder='Ingresa una tarea'
        value={newTask}
        onChange={hadleInputChange}/>

        <button className="add-button" onClick={addTask}>
            Añadir
        </button>
    </div>

    <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Borrar</button>
            <button onClick={() => moveTaskUp(index)}>↑</button>
            <button onClick={() => moveTaskDown(index)}>↓</button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default ToDoList
