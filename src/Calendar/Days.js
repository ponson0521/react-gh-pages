import React from 'react';

function Days({value, month, dayClick}) {
    const date = new Date();
    const handleClick = () => {
        dayClick(value);
    }

    if (value === date.getDate() && month === date.getMonth()+1) {
        return <li className='active' onClick={handleClick}>{value}</li>
    }
    else {
        return <li onClick={handleClick}>{value}</li>
    }
}

export default Days;
