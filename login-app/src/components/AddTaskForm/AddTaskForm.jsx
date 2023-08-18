import React, { useRef, useCallback } from "react";
import "./AddTaskForm.css";
import Button from "../UI/Button/Button";

function AddTaskForm({ onAddTask }) {
  const taskRef = useRef();

  const onFormSubmit = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const inputValue = taskRef.current.value;

    onAddTask(inputValue);
    taskRef.current.value = "";
  }, []);

  return (
    <form className="add_task_form" onSubmit={onFormSubmit}>
      <input ref={taskRef} required type="text" placeholder="введите задачу" />
      <Button type="submit">добавить</Button>
    </form>
  );
}

export default AddTaskForm;
