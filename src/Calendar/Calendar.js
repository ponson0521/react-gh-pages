import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Calendar.css'
import Days from './Days';
import MemoForm from './MemoForm';
import ToDoList from './ToDoList';

function Calendar() {
    const [year, setYear] = useState((new Date()).getFullYear());   // 年
    const [month, setMonth] = useState((new Date()).getMonth()+1);  //月
    const [day, setday] = useState((new Date()).getDate()); // 日
    const [clickDay, setClick] = useState(false);   // 點日期
    const [note, setNote] = useState([]);    // 該日待辦事項

    // 取得該月的日數
    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };    
    const thirty = Array(getDays(year, month)).fill().map((value, index) => index+1);

    // 到上個月
    const prevClick = () => {
        if (month === 1) {
            setMonth(prev => prev+11);
            setYear(prev => prev-1);
        }
        else {
            setMonth(prev => prev-1);
        }
    };

    // 到下個月
    const nextClick = () => {
        if (month === 12) {
            setMonth(prev => prev-11);
            setYear(prev => prev+1);
        }
        else {
            setMonth(prev => prev+1);
        }
    };

    // 點擊日期
    const dayClick = (e) => {
        setClick(prev => !prev);
        setday(e);
    };
    
    // 儲存表單送出的內容
    const getNote = (date, content) => {
        setNote([...note, {date:date, content:content}]);
    };

    return (
        <div id="calendar">
            <Link to="/"> 首頁 </Link>
            <ul className="month">
                <button className="prev" onClick={prevClick}>&#10094;</button>
                <button className="next" onClick={nextClick}>&#10095;</button>
                <li className='year' style={{cursor: "pointer", fontSize:"40px"}}>{year}</li>
                <li>{month}月</li>
            </ul>
            <ul className="weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
            </ul>
            <ul className='days'>
                {thirty.map((value, index) => <Days 
                key={index+1} value={value} month={month} dayClick={dayClick} />)}
                {clickDay ? <MemoForm month={month} day={day} getNote={getNote} setClick={setClick} /> : null}
            </ul>
            {/* <div>
                {note.map(note => (
                    <li key={note.date}>{note.date} {note.content}</li>
                ))}
            </div> */}
            <ToDoList month={month} note={note} />
        </div>
    );
}

export default Calendar;