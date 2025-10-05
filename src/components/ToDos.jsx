import React from "react";
import { useState } from "react";
function ToDos() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const crossOff = (index) => {
    const crossOutTask = [...tasks];
    crossOutTask[index].completed = true;
    setTasks(crossOutTask);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="bg-white rounded-2xl w-70 p-4 m-4 shadow-lg">
      <h2 className="text-center text-lg font-bold bg-white">To-Do List</h2>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index} className="text-sm">
            <button
              className={task.completed ? "line-through text-gray-400" : ""}
              onClick={() => {
                crossOff(index);
              }}
            >
              {task.task}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          placeholder="New Task"
          className="border border-gray-300 rounded px-2 py-1 w-full"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button
          onClick={addTask}
          className="mt-2 bg-[#fc9292] text-white px-4 py-2 rounded w-full"
        >
          Add Task
        </button>
        <button
          onClick={clearTasks}
          className="mt-2 bg-[#fc9292] text-white px-4 py-2 rounded w-full"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default ToDos;
