import React, { useState } from "react";
import ReactDOM from "react-dom"
import InputForm from "./components/InputForm";
import ListTasks from "./components/ListTasks";
import ProgressBar from "./components/ProgressBar";

function App() {
  // state (état, données)
  const [tasks, setTasks] = useState([
    { id: 1, name: "learning hooks", checked: false},
    { id: 2, name: "cyber security", checked: false},
    { id: 3, name: "apprendre à tricoter", checked: false},
    { id: 4, name: "faire 20 pompes sur 2 doigts", checked: false},
  ]);
  const [newTask, setNewTask] = useState("")
  // barStyleNow must be a % of tasks.length
  const [barStyleNow, setBarStyleNow] = useState(0);
  // pour verifier ne nb de box checked
  const [countChecked, setCountChecked] = useState(0)

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
    // alert(newTask);
    //1. copy du state
    const tasksCopy = [...tasks];
    //2. manipulation de la copy
    const id = new Date().getTime;
    const name = newTask;
    tasksCopy.push( {id: id, name: name, checked: false} )
    //3. modify state withis its setter
    setTasks(tasksCopy);
  };

  const handleChange =(event) => {
    setNewTask(event.target.value);
  }

  /** ProgressBar */
  const progressBarValue  = {
    width: barStyleNow + "%"
  }

  const handleCheck = (task, index) => {
    const tasksCopy = [...tasks]
    // console.log("click")
    
    tasksCopy.splice(index, 1, {
      ...task,
      checked: !task.checked,
    });
    setTasks(tasksCopy);
    // IDEE OPTION changer le style de name (rayer, plus clair)

    // count how many checkboxes are checked (task.checked === true )
    // counterCheckedBoxes(task);
    // console.log("countChecked " + countChecked);
  }
  
  
  
  



  const counterCheckedBoxes = (tasks) => {
    let count = 0;
    tasks.forEach(task => (task.checked === true) ? count +=1 : count); 
    setCountChecked(count);
  }

  const progessBarFcn = (tasks) => {
    // setBarStyleNow;
    const nbOfTasks = tasks.length;
    counterCheckedBoxes(tasks);
    setBarStyleNow((100 * countChecked) / nbOfTasks);
  }
   

  
  // affichage (render)
  return (
    <div className="">
      <ProgressBar progressValueNow={barStyleNow} styleNow={progressBarValue} />
      <ListTasks
        tasks={tasks}
        handleDelete={handleDelete}
        handleChecked={handleCheck}
        progessBarFcn={progessBarFcn}
      />

      <InputForm
        value={newTask}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
