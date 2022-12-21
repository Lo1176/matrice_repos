import React, { useState } from "react";
import ReactDOM from "react-dom"
import InputForm from "./InputForm";

function App() {
  // state (état, données)
  const [tasks, setTasks] = useState([
    { id: 1, name: "learning hooks" },
    { id: 2, name: "cyber security" },
    { id: 3, name: "apprendre à tricoter" },
    { id: 4, name: "faire 20 pompes sur 2 doigts" },
  ]);
  const [newTask, setNewTask] = useState("")

  // comportements
  const handleDelete = (id) => {
    //1. copy state
    const tasksCopy = [...tasks];
    //2. manipuler une copy de mon state
    const tasksCopyUpdated = tasksCopy.filter((task) => task.id !== id);
    //3. modify state with the setter
    setTasks(tasksCopyUpdated);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(newTask);
    //1. copy du state
    const tasksCopy = [...tasks];
    //2. manipulation de la copy
    const id = new Date().getTime;
    const name = newTask;
    tasksCopy.push( {id: id, name: name} )
    //3. modify state withis its setter
    setTasks(tasksCopy);
  };

  const handleChange =(event) => {
    setNewTask(event.target.value);


    // const tasksCopyUpdated = tasksCopy.push(());


  }

  // affichage (render)
  return (
    <div className="">
      <h1>My tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            {"  "}
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(task.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <InputForm
        value={newTask}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
