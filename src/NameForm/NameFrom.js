import React, {useState, useRef, useContext} from 'react';
import { nameContext } from '../App';

// React中form表單儲存訊息
function NameFrom() {

  // 使用useRef保存input的值來取代onChange
  const nameRef = useRef(null);
  const [submission, setSub] = useState(false);

  // 當submit按鈕被觸發setSub改變state中的submission
  const handleSubmit = event => {
    event.preventDefault();
    // 使用Ref.current.value取出此時DOM元素的值
    alert('Hello! '+ nameRef.current.value);
    setSub(prev => !prev);
  }; 

  // 使用useContext從Context中取出內容使用
  const myName = useContext(nameContext);

  // 依條件不同回傳不同內容(可以input與否)
  if (submission === false) {
    return (
      <form onSubmit={handleSubmit}>
        <h1>Hello, My name is {myName}</h1>
        <label>
          Your name :
          {/* setName使state中的name改變，會因此render新的字 */}
          <input type="text" name='name' ref={nameRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )  
  }
  else {
    return (
    <div>
      <h1>Hello, My name is {myName}</h1>
      <h1>Welcome {nameRef.current.value}</h1>
    </div>
    )
  }
}

export default NameFrom;