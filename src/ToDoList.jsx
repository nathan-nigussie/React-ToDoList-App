import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "eat breakfast",
    "take shower",
    "walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    //prevent creating empty task element
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    //swapping elements of array.
    // index > 0 implies if the element we want to move is at the begining of the div we dont want to move it up
    if (index > 0) {
      //swapping elements of array
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  // (index < tasks.length -1) implies if the element we want to move is at the bottom of the div so we dont want to move it down
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      //swapping elements of array
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List </h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task...."
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="add-btn" onClick={addTask}>
          Add-Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
