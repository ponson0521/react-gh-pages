import React, {useState, useEffect} from 'react';

function Progress() {
    const [value,setValue]=useState(1);
    const [percent, setPercent] = useState(1);

    const increase = () => {
        setPercent(99);
        setValue(prev => prev+1);
      };
    
    const decrease = () => {
        setPercent(1);
        setValue(prev => prev-1);
    };    

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
