import React from 'react';
import Stopwatch from './clock/stopWatch';
import Clock from './clock/clock';
import Timer from './clock/timer';
import './App.css';

function App() {
  const para1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Mi bibendum neque egestas congue quisque. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Massa eget egestas purus viverra accumsan in nisl nisi. Et tortor at risus viverra adipiscing at in tellus integer. Sit amet cursus sit amet. Mattis molestie a iaculis at erat. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Volutpat odio facilisis mauris sit amet. Odio ut sem nulla pharetra diam. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Sem integer vitae justo eget.";

  const para2 = "Non pulvinar neque laoreet suspendisse. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Pellentesque elit eget gravida cum sociis natoque. Quis ipsum suspendisse ultrices gravida dictum fusce. Vulputate dignissim suspendisse in est ante. Porttitor massa id neque aliquam. Urna neque viverra justo nec ultrices dui. Turpis in eu mi bibendum. Diam phasellus vestibulum lorem sed. Pharetra convallis posuere morbi leo urna molestie. Sed adipiscing diam donec adipiscing tristique. Enim ut sem viverra aliquet eget sit amet.";

  return (
    <div className="App">
      <header className="App-header">
        <h3>Time Management Dashboard</h3>
        <div className="clock-container">
          <Clock />
          <Timer />
          <Stopwatch />
        </div>
        <p className="para">{ para1 }</p>
        <p className="para">{ para2 }</p>
      </header>
    </div>
  );
}

export default App;
