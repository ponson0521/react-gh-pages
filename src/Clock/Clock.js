import React, {useState, useEffect} from 'react';

// 以React的生命週期方法實做時鐘，按鈕顯示或隱藏
function Clock() {
  // 在state中記錄時間與顯示狀態
  const [isToggleOn, setToggle] = useState(true);
  const [date, setDate] = useState(new Date());

  // 點擊後反轉bool值
  const handleClick = () => {
    setToggle(!isToggleOn);
  };

  // 使用useEffect設定一秒設定一次現在時間
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval();
    }, []
  );

  // 條件render，顯示時鐘與否
  if (isToggleOn) {
    return (
      <div className='clock'>
        <button onClick={handleClick}>
          {isToggleOn ? '顯示' : '隱藏'}
        </button>
        <h2>現在時間：{date.toLocaleTimeString()}</h2>
      </div>
    )
  }
  else {
    return (
      <div className='clock'>
        <button onClick={handleClick}>
          {isToggleOn ? '顯示' : '隱藏'}
        </button>
      </div>
    )
  }
}

export default Clock;
