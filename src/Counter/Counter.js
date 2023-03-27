import React, {useState, useEffect} from 'react';

// 記錄點擊狀態
function Counter() {
  // 使用Hook來儲存點擊次數
  const [count, setCount] = useState(0);

  // 當點擊時，以setCount設定次數加一，可使用prev變數直接取上一次結果來使用
  const handleClick = () => {
    setCount(prev => (prev + 1));
  };

  // 利用Effect Hook使瀏覽器 API 更新文件標題
  useEffect(() => {
      document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p style={{fontSize: '30px'}}>你敲了 {count} 次</p>
      <button onClick={handleClick}>  
        <img src={require('./woodfish.jpg')} alt='木魚' />
      </button>
    </div>
  )
}

export default Counter;