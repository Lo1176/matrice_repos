import React from 'react'

export default function ListTasks(props) {
  return (
    <>
      <h1>My tasks</h1>
      <ul className="list-unstyled">
        {props.tasks.map((task) => (
          <li className="" key={task.id}>
            {/* <div className="form-group form-check"> */}
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
            {/* </div> */}
            {task.name + " "}
            {"  "}
            <button
              className="btn btn-danger"
              onClick={() => props.handleDelete(task.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
