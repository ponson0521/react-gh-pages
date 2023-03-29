import React from 'react'
 
function ToDoList({note}) {

    const handleOnClick = (event) => {
        event.target.remove();
    };

    return (
        <table style={{cursor: "pointer"}} onClick={handleOnClick}>
            <thead>
                <tr>
                    {note.map(({date}, index) => 
                    <th key={index}>
                        {date}
                    </th>)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {note.map(({content}, index) => 
                    <td key={index} style={{border: "2mm ridge rgba(0, 220, 250, .6)"}}>
                        {content}
                    </td>)}
                </tr>
            </tbody>
        </table>    
    )
}

export default ToDoList;