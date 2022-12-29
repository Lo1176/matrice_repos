import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputForm from "./components/InputForm";
import ListTasks from "./components/ListTasks";
import ProgressBar from "./components/ProgressBar";
import CurentlyDoing from "./components/CurentlyDoing";
import BtnImDone from "./components/BtnImDone";

function App() {
  // state (état, données)
  const [tasks, setTasks] = useState([
    { id: 1, name: "learning hooks", checked: false, focus: false },
    { id: 2, name: "cyber security", checked: false, focus: false },
    { id: 3, name: "apprendre à tricoter", checked: false, focus: false },
    { id: 4, name: "faire 20 pompes sur 2 doigts", checked: false, focus: false },
  ]);
  const [newTask, setNewTask] = useState("");
  // barStyleNow must be a % of tasks.length
  const [barStyleNow, setBarStyleNow] = useState(0);
  // pour verifier ne nb de box checked
  const [countChecked, setCountChecked] = useState(0);
  // afficher la task à faire avec Do now Btn
  // const [show, setShow] = useState(true);
  const [doTheTask, setDoTheTask] = useState("Not currently doing anything");
  // btn active
  const [btnActive, setBtnActive] = useState(false)

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
    //1. copy du state
    const tasksCopy = [...tasks];
    //2. manipulation de la copy
    const id = new Date().getTime;
    const name = newTask;
    tasksCopy.push({ id: id, name: name, checked: false, focus: false });
    //3. modify state withis its setter
    setTasks(tasksCopy);
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  /** do now */

  /** ProgressBar */
  const progressBarValue = {
    width: barStyleNow + "%",
  };

  const tasksCopy = [...tasks];

  const handleCheck = (task, index) => {
    tasksCopy.splice(index, 1, {
      ...task,
      checked: !task.checked,
    });
    setTasks(tasksCopy);
  };

  const handleFocus = (task, index) => {
    // console.log(task.name);
    tasksCopy.splice(index, 1, {
      ...task,
      focus: !task.focus,
    });
    setTasks(tasksCopy);
    const showTheTask = tasksCopy.filter((task) => task.focus === true);
    // show task name
    if (showTheTask[0].name) {
      console.log(showTheTask[0]);
      setDoTheTask(showTheTask[0].name)
      setBtnActive(showTheTask[0].focus);  
      
    }
    // abled btn-done
    
    // resetDoingNow(tasksCopy);
    // console.log("doTheTask " + doTheTask);
  };

  const resetDoingNow = (tasksCopy) => {    
    setTasks(
      tasksCopy.forEach(task => {
        task.focus = false 
      })  
    );
  };

  // const 

  const counterCheckedBoxes = (tasks) => {
    let count = 0;
    tasks.forEach((task) => (task.checked === true ? (count += 1) : count));
    setCountChecked(count);
  };

  const progessBarFcn = (tasks) => {
    // setBarStyleNow;
    const nbOfTasks = tasks.length;
    counterCheckedBoxes(tasks);
    setBarStyleNow((100 * countChecked) / nbOfTasks);
  };

  // affichage (render)
  return (
    <>
      <div className="col-xl-6 p-4">
        <ProgressBar
          progressValueNow={barStyleNow}
          styleNow={progressBarValue}
        />
        <ListTasks
          tasks={tasks}
          handleDelete={handleDelete}
          handleChecked={handleCheck}
          progessBarFcn={progessBarFcn}
          handleFocus={handleFocus}
        />

        <InputForm
          value={newTask}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
      <div className="col-xl-6 p-4 bg-sable text-center">
        <CurentlyDoing doTheTask={doTheTask} />
        <BtnImDone btnActive={btnActive} setBtnActive ={setBtnActive}/>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
