import React from 'react';

const ProgressBar = (props) => {
    return (
      <>
        <p>Progress:</p>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            style={props.styleNow}
            role="progressbar"
            aria-valuenow={props.progressValueNow}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </>
    );
}

// const styles = StyleSheet.create({})

export default ProgressBar;
