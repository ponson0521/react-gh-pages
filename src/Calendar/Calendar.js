import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Calendar.css'
import Days from './Days';
import MemoForm from './MemoForm';

function Calendar() {
    const [year, setYear] = useState((new Date()).getFullYear());   // 年
    const [month, setMonth] = useState((new Date()).getMonth()+1);  //月
    const [day, setday] = useState((new Date()).getDate()); // 日
    const [note, setNote] = useState([{date:null, content: null}]);    // 該日待辦事項
    const [click, setClick] = useState(false);    // 呼叫出表單與否

    // 取得該月份的日數
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

    return (
        // 使用context.provider提供note與setNote給所有下層使用
        <noteContext.Provider value={{note, setNote}}>
            <div id="calendar">
                <Link to="/practice"> 其他練習 </Link>
                    <ul className="month">
                        <button className="button prev" onClick={prevClick}>&#10094;</button>
                        <button className="button next" onClick={nextClick}>&#10095;</button>
                        <li className='year' style={{cursor: "pointer", fontSize:"40px"}}>{year}年{month}月</li>
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
                        {thirty.map((today, index) => <Days 
                        key={index+1} today={today} month={month} setClick={setClick} setday={setday} />)}
                    </ul>
                    {click ? <MemoForm month={month} day={day} setClick={setClick}/> : null}
            </div>
        </noteContext.Provider>
    );
}

export const noteContext = React.createContext();
export default Calendar;