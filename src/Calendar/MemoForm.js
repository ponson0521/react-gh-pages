import React, {useState} from 'react';

function MemoForm({month, day, getNote, setClick}) {
    const [memory, setMemory] = useState("請輸入當日事項");

    const handleChange = event => {
        setMemory(event.target.value);
    };    
    // 使用Calendar傳下來的getNote方法將表單內容上傳(以及setClick)
    const handleSubmit = event => {
        event.preventDefault()
        getNote(`${month}/${day}`, `${memory}`);
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
