/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from "react";
import TaskList from "../TaskList/TaskList";
import Card from "../UI/Card/Card";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import "./Home.css";

import TaskContext from "../../context/task-context";

import { uid, filterTask } from "../../utils";

function Home() {
  const [tasks, setTasks] = useState({});
  const [filteredTasks, setFilteredTasks] = useState({});
  const [taskFilter, setTaskFilter] = useState("filter-all");

  // загрузка задач из localStorage при монтировании компонента
  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    setTasks(localTasks);
    console.log("init load localTasks =", localTasks);
    setFilteredTasks(filterTask(localTasks, taskFilter));
  }, []);

  const writeToLocalStorage = (tasksDict) => {
    const stringTaskList = JSON.stringify(tasksDict);
    localStorage.setItem("tasks", stringTaskList);
  };

  // записываем задачи в localStorage при изменении списка задач
  // фильтруем согласо фильтру задачи
  useEffect(() => {
    writeToLocalStorage(tasks);
  }, [tasks]);

  // фильтруем задачи при измененении списка задач или фильтра
  useEffect(() => {
    setFilteredTasks(filterTask(tasks, taskFilter) || {});
  }, [tasks, taskFilter]);

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

  const taskFilterHandler = (filterName) => {
    // console.log("taskFilterHandler.filterName =", filterName);
    setTaskFilter(filterName);
  };

  return (
    <Card className="home">
      <h1>Home</h1>

      <AddTaskForm onAddTask={onAddTaskHandler} />

      <TaskContext.Provider
        value={{
          onDeleteTask: deleteTaskHandler,
          onTaskClick: taskClickHandler,
          onFilterChange: taskFilterHandler,
        }}
      >
        <TaskList tasks={filteredTasks} />
      </TaskContext.Provider>
    </Card>
  );
}

export default Home;
