import React, { useState, useEffect } from 'react';
import './stopWatch.css';

function Stopwatch() {
  const [ startTime, setStartTime ] = useState( null );
  const [ elapsedTime, setElapsedTime ] = useState( 0 );
  const [ timerRunning, setTimerRunning ] = useState( false );

  useEffect( () => {
    let intervalId;
    if ( timerRunning ) {
      intervalId = setInterval( () => {
        const currentTime = new Date().getTime();
        setElapsedTime( currentTime - startTime );
      }, 100 );
    } else {
      clearInterval( intervalId );
    }

    return () => clearInterval( intervalId );
  }, [ timerRunning, startTime ] );

  const startTimer = () => {
    setStartTime( new Date().getTime() - elapsedTime );
    setTimerRunning( true );
  };

  const pauseTimer = () => {
    setTimerRunning( false );
  };

  const resetTimer = () => {
    setElapsedTime( 0 );
    setTimerRunning( false );
  };

  const formatTime = ( time ) => {
    const milliseconds = Math.floor( time % 1000 );
    const seconds = Math.floor( time / 1000 );
    const minutes = Math.floor( seconds / 60 );
    const remainingSeconds = seconds % 60;
    const formattedMilliseconds = Math.floor( milliseconds / 10 ); // Truncate milliseconds to two digits
    return `${ minutes < 10 ? '0' : '' }${ minutes }:${ remainingSeconds < 10 ? '0' : '' }${ remainingSeconds }.${ formattedMilliseconds < 10 ? '0' : '' }${ formattedMilliseconds }`;
  };

  return (
    <div className="clock">
      <span>{ formatTime( elapsedTime ) }</span>
      <div className="buttons">
        { !timerRunning ? (
          <button onClick={ startTimer }>Start</button>
        ) : (
          <button onClick={ pauseTimer }>Pause</button>
        ) }
        <button onClick={ resetTimer }>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
