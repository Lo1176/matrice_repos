import React from 'react';

const CurentlyDoing = (props) => {
    // console.log(props.show)
    // console.log(props.toggleTask);
    return (
      <>
        <h2>Curently doing</h2>
        {/* {props.tasks.map((task) => (
          <>
            (
            {props.task.doingTask === false ? (
              <p>"Not currently doing anything"</p>
            ) : (
              <p>{task.name}</p>
            )}
            )
          </>
        ))} */}
      </>
    );  
}

export default CurentlyDoing;