import React, {useContext} from 'react'
import { noteContext } from './Calendar';

// 顯示表單送出的當日事項
function ToDoList({today}) {
    const {note, setNote} = useContext(noteContext);

    // 點擊當日事項後移除該事項
    const handleClick = event => {
        const newArray = note.filter(obj => {
            return obj.date !== event.target.className})
        setNote(newArray);
    }
    
    // 將note中的date的value與日曆的日期做比對，用以將對應的物件(result)渲染在對應日期
    const result = note.filter(obj => {    // filter回傳一個包含符合項目的array
        return obj.date === today
    });

    if (result.length < 1) {
        return <p></p>
    }
    else {
        return (
            <div className={today} style={{color: "rgb(0, 0, 0)"}} onClick={handleClick}>
                {result.map((value, index) => <p key={index} style={{margin: 0}}>{value.content}</p>)}
            </div>
            );
    }
}    

export default ToDoList;