/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from "react";
import TaskList from "../TaskList/TaskList";
import Card from "../UI/Card/Card";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import "./Home.css";

import ItemContext from "../../context/item-context";

import uid from "../../utils";

function Home() {
  const [tasks, setTasks] = useState(new Map());

  // загрузка задач из localStorage при монтировании компонента
  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    setTasks(localTasks);
    console.log("init load localTasks =", localTasks);
  }, []);

  const writeToLocalStorage = (tasksDict) => {
    const stringTaskList = JSON.stringify(tasksDict);
    localStorage.setItem("tasks", stringTaskList);
  };

  // записываем задачи в localStorage при изменении списка задач
  useEffect(() => {
    writeToLocalStorage(tasks);
  }, [tasks]);

  const onAddTaskHandler = (taskName) => {
    const task = { id: uid(), task: taskName, isCompleted: false };

    setTasks((prevTasks) => {
      const tasksDict = structuredClone(prevTasks);
      tasksDict[task.id] = task;
      return tasksDict;
    });
  };

  // удаление задачи по id
  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      const newTasks = structuredClone(prevTasks);
      delete newTasks[taskId];
      return newTasks;
    });
  };

  // изменение статуса задачи на противоположенный
  const taskClickHandler = (taskId) => {
    setTasks((prevTasks) => {
      const newTasks = structuredClone(prevTasks);
      newTasks[taskId].isCompleted = !newTasks[taskId].isCompleted;
      return newTasks;
    });
  };

  return (
    <Card className="home">
      <h1>Home</h1>

      <AddTaskForm onAddTask={onAddTaskHandler} />

      <ItemContext.Provider
        value={{
          onDeleteTask: deleteTaskHandler,
          onTaskClick: taskClickHandler,
        }}
      >
        <TaskList tasks={tasks} />
      </ItemContext.Provider>
    </Card>
  );
}

export default Home;
