import React from "react";
import ToDoList from "./ToDoList";

// 該月的天數
function Days({ today, month, year, setClick, setday }) {
  const date = new Date();

  // 點擊日期將當天記錄在state，並傳換click這個state的bool值，呼叫出form
  const clickDate = () => {
    setClick(today);
    setday(today);
  };

  // 當天與現實時間同一天，則添加active的CSS
  if (
    today === date.getDate() &&
    month === date.getMonth() + 1 &&
    year === date.getFullYear()
  ) {
    return (
      <li className="active">
        <h3 onClick={clickDate}>{today}</h3>
        <ToDoList today={`${month}/${today}`} />
      </li>
    );
  } else {
    return (
      <li>
        <h3 onClick={clickDate}>{today}</h3>
        <ToDoList today={`${month}/${today}`} />
      </li>
    );
  }
}

export default Days;
