import React, { useState, useEffect } from 'react';
import './clock.css';

function Clock() {
  const [ time, setTime ] = useState( new Date() );

  useEffect( () => {
    const intervalId = setInterval( () => {
      setTime( new Date() );
    }, 1000 );

    return () => clearInterval( intervalId );
  }, [] );

  const formatTime = ( date ) => {
    return `${ date.getHours() < 10 ? '0' : '' }${ date.getHours() }:${ date.getMinutes() < 10 ? '0' : '' }${ date.getMinutes() }`;
  };

  return (
    <div className="clock">
      <span>{ formatTime( time ) }</span>
    </div>
  );
}

export default Clock;
