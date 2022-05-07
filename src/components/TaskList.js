import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  // transfrom array into array of JSK elements
  const taskArray = tasks.map((task, index) => {
    return <Task 
      key={index} 
      text={task.text} 
      category={task.category}
      handleDelete={handleDelete}
      />
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskArray}
    </div>
  );
}

export default TaskList;
