import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputForm from "./components/InputForm";
import ListTasks from "./components/ListTasks";
import ProgressBar from "./components/ProgressBar";
import CurentlyDoing from "./components/CurentlyDoing";

function App() {
  // state (état, données)
  const [tasks, setTasks] = useState([
    { id: 1, name: "learning hooks", checked: false, doingTask: false },
    { id: 2, name: "cyber security", checked: false, doingTask: false },
    { id: 3, name: "apprendre à tricoter", checked: false, doingTask: false },
    {
      id: 4,
      name: "faire 20 pompes sur 2 doigts",
      checked: false,
      doingTask: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");
  // barStyleNow must be a % of tasks.length
  const [barStyleNow, setBarStyleNow] = useState(0);
  // pour verifier ne nb de box checked
  const [countChecked, setCountChecked] = useState(0);
  // afficher la task à faire avec Do now Btn
  // const [show, setShow] = useState(true);
  const [doTheTask, setDoTheTask] = useState("Not currently doing anything");

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
    tasksCopy.push({ id: id, name: name, checked: false, doingTask: false });
    //3. modify state withis its setter
    setTasks(tasksCopy);
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  /** do now */
  // const toggleTask = () => {
  //   setShow(!show);
  // }

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
    // IDEE OPTION changer le style de name (rayer, plus clair)
  };

  const handleDoingTask = (task, index) => {
    // console.log(task.name);
    resetDoingNow(tasksCopy);
    tasksCopy.splice(index, 1, {
      ...task,
      doingTask: !task.doingTask,
    });
    setTasks(tasksCopy);
    const showTheTask = tasksCopy.filter((task) => task.doingTask === true);
    if (showTheTask[0].name) {setDoTheTask(showTheTask[0].name);}
    console.log("doTheTask " + doTheTask);
  };

  const resetDoingNow = (tasksCopy) => {    
    setTasks(
      tasksCopy.forEach(task => {
        console.log(task.name + " " + task.doingTask) 
        task.doingTask = false 
      })
      
      );
  };

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
    <div className="dash">
      <div className="left">
        <ProgressBar
          progressValueNow={barStyleNow}
          styleNow={progressBarValue}
        />
        <ListTasks
          tasks={tasks}
          handleDelete={handleDelete}
          handleChecked={handleCheck}
          progessBarFcn={progessBarFcn}
          handleDoingTask={handleDoingTask}
        />

        <InputForm
          value={newTask}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
      <div className="right">
        <CurentlyDoing doTheTask={doTheTask} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
