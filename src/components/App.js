import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import Task from "./Task";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [taskStateArr, setTaskStateArr] = useState(TASKS);
  const [categoryState, setCategoryState] = useState("All");

  const handleDelete = (deletedTaskText) => {
    setTaskStateArr(taskStateArr.filter(task => task.text !== deletedTaskText))
    console.log('Deleted!')
  }

  const handleCategoryState = (category) => {
    setCategoryState(category)
  }

  //to only show the tasks which category is clicked on
  const filteredTasks = taskStateArr.filter(task => task.category === categoryState || categoryState === "All")

  //handle new category add state
  const addNewTask = (newTask) => {
    console.log(newTask)
    //take all of the tasks and add in our new task
    setTaskStateArr([...taskStateArr, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoryState={categoryState} handleCategoryState={handleCategoryState}/>
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} addNewTask={addNewTask}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
