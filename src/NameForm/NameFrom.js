import React, {useState, useRef, useContext} from 'react';
import { nameContext } from '../App';

// React中form表單儲存訊息
function NameFrom() {
  // 使用useRef保存input的值
  const nameRef = useRef(null);
  const [submission, setSub] = useState(false);
  // 當submit按鈕被觸發setSub改變state中的submission
  const handleSubmit = event => {
    event.preventDefault();
    alert('Hello! '+ nameRef.current.value);
    setSub(prev => !prev);
  }; 
  const myName = useContext(nameContext);

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