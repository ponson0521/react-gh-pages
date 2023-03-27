import React, {useState} from 'react';

// React中form表單儲存訊息
function NameFrom(props) {
    const [name, setName] = useState(props.name);
    const [submission, setSub] = useState(null);
    // 當submit按鈕被觸發setSub改變state中的submission的值
    const handleSubmit = event => {
      alert('Hello! '+ name);
      setSub(name)
      event.preventDefault();
    }; 
    if (submission != null) {
      return <h1>Welcome {submission}</h1>
    }
    else {
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Your name :
            {/* setName使state中的name改變，會因此render新的字 */}
            <input type="text" value={name} onChange={event => {setName(event.target.value)}} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )  
    }
  }

export default NameFrom;