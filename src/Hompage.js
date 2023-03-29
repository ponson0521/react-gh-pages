import React from 'react';
import {Link} from 'react-router-dom';
import Clock from './Clock/Clock';
import NameFrom from './NameForm/NameFrom';
import Counter from './Counter/Counter';
import Progress from './Progress/Progress';
import Calculator from './Calculator/Calculator';
import Game from './Tictactoe/Tictactoe';
import FetchData from './FetchData/FetchData';


function Homepage() {
  
  return (
    <div style={{border: 'solid'}}>
      <Link to="/calendar"> 行事曆 </Link>
      <Clock />       
      <hr/>
      <Progress />
      <hr/>
      <NameFrom name=''/>
      <hr/>
      <Counter />
      <hr/>
      <Calculator />
      <hr/>
      <Game />
      <hr/>
      <FetchData />
      <hr/>
    </div>
  )
  }
  
  export default Homepage;
  