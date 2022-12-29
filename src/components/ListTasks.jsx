import React from "react";

export default function ListTasks(props) {
  // console.log(props.countChecked)
  // count the number of checkboxes checked
  props.progessBarFcn(props.tasks);
  // props.removeBtnDoNow(props.tasks);

  return (
    <>
      <h1>My tasks</h1>
      <ul className="list-unstyled">
        {props.tasks.map((task, index) => (
          <li
            className="d-flex align-items-center justify-content-between m-3"
            key={task.id}
          >
            <input
              type="checkbox"
              className="form-check-input"
              id={task.id}
              // defaultChecked={false}
              // checked={task.checked}
              // defaultChecked="false"
              // {`${task.focus ? true : false}`}

              onChange={() => props.handleChecked(task, index)}
            />
            <p className="pl-2 mb-0">{task.name + " "}</p>
            <div className="right_btn">
              <button
                className="do-now btn btn-outline-info mr-3"
                key={index}
                onClick={() => props.handleFocus(task, index)}
              >
                {!task.focus ? "do now?" : "do now"}
              </button>
              <button
                className="btn btn-danger"
                onClick={() => props.handleDelete(task.id)}
              >
                x
              </button>
            </div>
          </li>
          // ,console.log(task.name)
        ))}
      </ul>
    </>
  );
}
