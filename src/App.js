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
    // 使用Context.provider提供全域可用的資訊
    <nameContext.Provider value='Michael'>
      {/* 使用Router指向不同頁面 */}
      <Router>
        <Routes>        
          <Route path="/" element={<Calendar />} />
          <Route path="/calendar" element={<Homepage />} />
        </Routes>
      </Router>
    </nameContext.Provider>
  )
}

export default App;
