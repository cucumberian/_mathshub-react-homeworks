/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./TaskItem.css";

import TaskContext from "../../context/task-context";

function TaskItem({ task }) {
  const contextValue = React.useContext(TaskContext);

  const deleteTaskHandler = () => {
    const taskId = task.id;
    contextValue.onDeleteTask(taskId);
  };

  const onTaskClick = () => {
    const taskId = task.id;
    contextValue.onTaskClick(taskId);
  };

  return (
    <div className="task_item">
      <span
        className={`task_item-name ${task.isCompleted ? "completed" : ""}`}
        onClick={onTaskClick}
      >
        {task.task}
      </span>
      <AiFillCloseCircle
        className="task_item-delete"
        onClick={deleteTaskHandler}
      />
    </div>
  );
}

export default TaskItem;
