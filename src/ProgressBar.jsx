import React from 'react';

const ProgressBar = () => {
    return (
        <>
            <p>Progress:</p>
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    );
}

// const styles = StyleSheet.create({})

export default ProgressBar;
