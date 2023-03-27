import React, {useState} from 'react';

function MemoForm({year, month, day, getNote, setClick}) {
    const [memory, setMemory] = useState("請輸入當日事項");
    const handleChange = event => {
        setMemory(event.target.value);
    };    
    const handleSubmit = event => {
        event.preventDefault()
        getNote(`${year}/${month}/${day}`, `${memory}`);
        setClick(prev => !prev);
    }

    return (            
        <form onSubmit={handleSubmit}>
        <input type="text" value={memory} onChange={handleChange} />
        <input type="submit" value="送出" /> 
        </form>
    );
    
}

export default MemoForm;
