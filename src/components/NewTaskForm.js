import React, { useState } from "react";

function NewTaskForm({ categories, addNewTask }) {
  //to get the state from the form you have to use state in the component
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const categoryOption = categories.map(category => (
    <option key={category}>{category}</option>
  ))

  const onTaskFormSubmit = (e) => {
    e.preventDefault();
    //add in a new object of the text and category that was saved in state
    addNewTask({text, category});

  }

  return (
    //why is the onSubmit only working if I have both "e"s passed in???
    <form className="new-task-form" onSubmit={(e) => onTaskFormSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categoryOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
