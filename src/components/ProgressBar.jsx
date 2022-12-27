import React from 'react';

const ProgressBar = (props) => {
    return (
      <div className='d-flex'>
        Progress:
        <div className="progress mx-2 w-75">
          <div
            className="progress-bar bg-success"
            style={props.styleNow}
            role="progressbar"
            aria-valuenow={props.progressValueNow}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
}

// const styles = StyleSheet.create({})

export default ProgressBar;
