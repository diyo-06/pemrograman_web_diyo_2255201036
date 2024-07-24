import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Tambahkan Tugas Baru"
      />
      <button onClick={handleAddTask}>Tambah Tugas</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>
              {index + 1}. {task}
            </span>
            <button onClick={() => handleDeleteTask(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
