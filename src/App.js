import React from 'react';
import './App.css';
import Clock from './Clock/Clock';
import NameFrom from './NameForm/NameFrom';
import Counter from './Counter/Counter';
import Progress from './Progress/Progress';
import Calendar from './Calendar/Calendar';
import Calculator from './Calculator/Calculator';

function App() {

  return (
    <div style={{border: 'solid'}}>
      <Calendar />
      <hr/>
      <Progress />
      <hr/>
      <Clock />
      <h1>Hello, My name is Michael</h1>
      <NameFrom name=''/>
      <hr/>
      <Counter />
      <hr/>
      <Calculator />
    </div>
  )
}

export default App;
