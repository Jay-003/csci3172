import React, { useState, useEffect } from 'react';
import './timer.css';

function Timer() {
  const [ hoursInput, setHoursInput ] = useState( '00' );
  const [ minutesInput, setMinutesInput ] = useState( '00' );
  const [ secondsInput, setSecondsInput ] = useState( '00' );
  const [ remainingTime, setRemainingTime ] = useState( 0 );
  const [ timerRunning, setTimerRunning ] = useState( false );

  useEffect( () => {
    let intervalId;
    if ( timerRunning && remainingTime > 0 ) {
      intervalId = setInterval( () => {
        setRemainingTime( prevTime => prevTime - 1000 );
      }, 1000 );
    } else {
      clearInterval( intervalId );
      setTimerRunning( false );
    }

    return () => clearInterval( intervalId );
  }, [ timerRunning, remainingTime ] );

  const handleInputChange = ( event, setStateFunction ) => {
    const { value } = event.target;
    setStateFunction( value.length < 2 ? `0${ value }` : value.slice( -2 ) );
  };

  const startTimer = () => {
    const hours = parseInt( hoursInput ) * 3600000; // Convert hours to milliseconds
    const minutes = parseInt( minutesInput ) * 60000; // Convert minutes to milliseconds
    const seconds = parseInt( secondsInput ) * 1000; // Convert seconds to milliseconds
    const inputTime = hours + minutes + seconds;
    setRemainingTime( inputTime );
    setTimerRunning( true );
  };

  const pauseTimer = () => {
    setTimerRunning( false );
  };

  const resetTimer = () => {
    setHoursInput( '00' );
    setMinutesInput( '00' );
    setSecondsInput( '00' );
    setRemainingTime( 0 );
    setTimerRunning( false );
  };

  const formatTime = ( time ) => {
    const hours = Math.floor( time / 3600000 );
    const minutes = Math.floor( ( time % 3600000 ) / 60000 );
    const seconds = Math.floor( ( time % 60000 ) / 1000 );
    return `${ hours < 10 ? '0' : '' }${ hours }:${ minutes < 10 ? '0' : '' }${ minutes }:${ seconds < 10 ? '0' : '' }${ seconds }`;
  };

  return (
    <div className="timer">
      <div>
        <input
          type="text"
          placeholder="HH"
          maxLength="2"
          value={ hoursInput }
          onChange={ ( e ) => handleInputChange( e, setHoursInput ) }
        />
        <span>:</span>
        <input
          type="text"
          placeholder="MM"
          maxLength="2"
          value={ minutesInput }
          onChange={ ( e ) => handleInputChange( e, setMinutesInput ) }
        />
        <span>:</span>
        <input
          type="text"
          placeholder="SS"
          maxLength="2"
          value={ secondsInput }
          onChange={ ( e ) => handleInputChange( e, setSecondsInput ) }
        />
      </div>
      <span>{ formatTime( remainingTime ) }</span>
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

export default Timer;
