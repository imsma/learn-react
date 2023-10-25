// src/App.js
import React from "react";
import "./App.css";
import TaskList from "./TaskList";

function App() {
  const tasks = [
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Build a Task App", completed: false },
    { id: 3, title: "Add some style", completed: false },
    { id: 3, title: "Somne other style", completed: false },
    { id: 3, title: "And It's some style", completed: false },
    { id: 3, title: "Okay some style", completed: false },
    { id: 3, title: "Done some style", completed: false },
  ];
  return (
    <div className="App">
      <h1>My Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}
export default App;
