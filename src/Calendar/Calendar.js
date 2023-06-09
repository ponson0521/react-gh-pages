import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Calendar.css";
import Days from "./Days";
import MemoForm from "./MemoForm";
import RandomID from "../RandomID/RandomID";

function Calendar() {
  const [year, setYear] = useState(new Date().getFullYear()); // 年
  const [month, setMonth] = useState(new Date().getMonth() + 1); //月
  const [day, setday] = useState(new Date().getDate()); // 日
  const [note, setNote] = useState([
    { id: RandomID(5), date: null, content: null },
  ]); // 該日待辦事項
  const [click, setClick] = useState(null); // 呼叫出表單與否
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const [show, setShow] = useState(false); // 是否彈出小視窗

  // 取得月份開始的星期
  const firstDayThisMonth = new Date(year, month - 1, 1).getDay();
  // 取得該月份的日數
  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  const thirty = Array(getDays(year, month))
    .fill()
    .map((value, index) => index + 1);
  const newthirty = [...Array(firstDayThisMonth).fill(null), ...thirty];

  // 到上個月
  const prevClick = () => {
    if (month === 1) {
      setMonth((prev) => prev + 11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };
  // 到下個月
  const nextClick = () => {
    if (month === 12) {
      setMonth((prev) => prev - 11);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  return (
    // 使用context.provider提供note與setNote給所有下層使用
    <noteContext.Provider value={{ note, setNote }}>
      <div id="calendar">
        <Link to="/practice"> 其他練習 </Link>
        <ul className="month">
          <button className="button prev" onClick={prevClick}>
            &#10094;
          </button>
          <button className="button next" onClick={nextClick}>
            &#10095;
          </button>
          <Button
            variant="outline-dark"
            size="lg"
            style={{ fontSize: "40px" }}
            onClick={() => setShow(true)}
          >
            {year}年{month}月
          </Button>
        </ul>
        <ul className="weekdays">
          {weekdays.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <ul className="days">
          {newthirty.map((today, index) => (
            <Days
              key={index + 1}
              today={today}
              month={month}
              year={year}
              setClick={setClick}
              setday={setday}
            />
          ))}
        </ul>
        {click !== null ? (
          <MemoForm month={month} day={day} setClick={setClick} />
        ) : null}
      </div>
      {/* 以下為彈出的小視窗 */}
      <>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>選擇年/月</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              年：
              <input
                type="number"
                value={year}
                onChange={(event) => setYear(parseInt(event.target.value, 10))}
              />
              <br />
              月：
              <input
                type="number"
                value={month}
                min={1}
                max={12}
                onChange={(event) => setMonth(parseInt(event.target.value, 10))}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </noteContext.Provider>
  );
}

export const noteContext = React.createContext();
export default Calendar;
