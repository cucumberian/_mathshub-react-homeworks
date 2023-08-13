/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import "./TaskItem.css";

import ItemContext from "../../context/item-context";

function TaskItem({ task }) {
  console.log("task =", task);
  const contextValue = React.useContext(ItemContext);

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
      <span className="task_item-delete" onClick={deleteTaskHandler}>
        X
      </span>
    </div>
  );
}

export default TaskItem;
