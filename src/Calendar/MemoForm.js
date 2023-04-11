import React, { useState, useContext } from "react";
import { noteContext } from "./Calendar";
import RandomID from "../RandomID/RandomID";

// 輸入當日事項的form
function MemoForm({ month, day, setClick }) {
  // 取出noteContext中的方法
  const { note, setNote } = useContext(noteContext);
  const [memory, setMemory] = useState("");

  const handleChange = (event) => {
    setMemory(event.target.value);
  };
  // 使用noteContext中的setNote方法將表單內容上傳
  const handleSubmit = (event) => {
    if (memory !== "") {
      event.preventDefault();
      setNote([
        ...note,
        { id: RandomID(5), date: `${month}/${day}`, content: `${memory}` },
      ]);
      setClick(null);
    } else {
      event.preventDefault();
      alert("請輸入內容");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      請輸入當日事項:
      <input type="text" value={memory} onChange={handleChange} />
      <input type="submit" value="送出" />
      <input type="button" value="取消" onClick={() => setClick(null)} />
    </form>
  );
}

export default MemoForm;
