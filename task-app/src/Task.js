// src/Task.js
import React from "react";
import "./Task.css";

function Task({ title, completed }) {
  return <div className={`task ${completed ? "completed" : ""}`}>{title}</div>;
}
export default Task;
