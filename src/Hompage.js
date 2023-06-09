import React from 'react';
import {Link} from 'react-router-dom';
import Clock from './Clock/Clock';
import NameFrom from './NameForm/NameFrom';
import Counter from './Counter/Counter';
import Progress from './Progress/Progress';
import Calculator from './Calculator/Calculator';
import Game from './Tictactoe/Tictactoe';
import FetchData from './FetchData/FetchData';
import Dialog from './Dialog/Dialog';
import FilterableProductTable from './Product/Product';
       
function Homepage() {
  
  return (
    <div style={{border: 'solid'}}>
      <Link to="/"> 行事曆 </Link>
      <Clock />       
      <hr/>
      <Progress />   
      <hr/>   
      <Dialog color="blue" title="Welcome" message="Glad you are here." />
      <Dialog color="red" title="Welcome" message="Glad you are here." />
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
      <FilterableProductTable />
    </div>
  )
  }
  
  export default Homepage;
  