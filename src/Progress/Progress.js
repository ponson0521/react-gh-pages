import React, {useState, useEffect} from 'react';

// 製作進度條練習狀態控制
function Progress() {
    // 設定目標值: percent，以及當前值: value，的State Hook
    const [value,setValue]=useState(1);
    const [percent, setPercent] = useState(1);

    // 觸發即設定目標(percent)為99，當前值(value)加1
    const increase = () => {
        setPercent(99);
        setValue(prev => prev+1);
      };
    // 觸發即設定目標(percent)為1，當前值(value)減1
    const decrease = () => {
        setPercent(1);
        setValue(prev => prev-1);
    };    

    // 使用Effect Hook設定setTImeout以20毫秒間隔觸發increase或decrease function
    useEffect(()=>{
    if (percent < value) {
        const timer = setTimeout(decrease, 20);
        return () => clearTimeout(timer);
    }
    else if (percent > value) {
        const timer = setTimeout(increase, 20);
        return () => clearTimeout(timer);
    }
    });  

    return (
        <div>
            <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
                <div className="progress-bar" style={{backgroundColor:"rgba(255, 0, 0, 1)",width:value.toString()+"%",height:"100%",borderRadius:"10px"}}>
                </div>
            </div>
            {value.toFixed(0)}%
            <button onClick={increase}>增加</button>
            <button onClick={decrease}>減少</button> 
        </div>
    );
}

export default Progress;
