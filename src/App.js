import React, {useEffect} from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Calendar from './Calendar/Calendar';
import Homepage from './Hompage'

// 匯出一個context object供下層使用
export const nameContext = React.createContext("Michael");

function App() {
  // 提示網頁重載
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  return (
    <nameContext.Provider value='Michael'>
      <Router>
        <Routes>        
          <Route path="/" element={<Homepage />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </nameContext.Provider>
  )
}

export default App;
