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
    
    // 將note中的date的value與日曆的日期做比對，將對應的物件(result)渲染在對應日期
    const result = note.find(obj => {
        return obj.date === today
    });

    if (result === undefined) {
        return <p></p>
    }
    else {
        return <h3 className={today} onClick={handleClick}>{result.content}</h3>
    }
}    


export default ToDoList;