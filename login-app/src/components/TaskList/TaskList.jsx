import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList({ tasks }) {
  const taskList = Object.values(tasks).reduce(
    (acc, task) => [...acc, task],
    []
  );

  return (
    <div className="task_list">
      {taskList.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
