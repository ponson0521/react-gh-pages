import React from 'react';
import './App.css';
import Clock from './Clock/Clock';
import NameFrom from './NameForm/NameFrom';
import Counter from './Counter/Counter';
import Progress from './Progress/Progress';
import Calendar from './Calendar/Calendar'

function App(props) {

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
    </div>
  )
}

export default App;
