import React from "react";
import { TASKS } from "../data";


// pass down the props from tasklist
function Task({ text, category, handleDelete }) {

  const handleClick = () => {
    handleDelete(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
