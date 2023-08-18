import React, { useState, useEffect } from "react";
import { uid, filterTask } from "../utils";

const TaskContext = React.createContext({});

function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState({});
  const [filteredTasks, setFilteredTasks] = useState({});
  const [taskFilter, setTaskFilter] = useState("filter-all");

  // запись задач в локальное хранилище
  const writeToLocalStorage = (tasksDict) => {
    const stringTaskList = JSON.stringify(tasksDict);
    localStorage.setItem("tasks", stringTaskList);
  };

  // загрузка задач из localStorage при монтировании компонента
  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    setTasks(localTasks);
    console.log("init load localTasks =", localTasks);
    setFilteredTasks(filterTask(localTasks, taskFilter));
  }, []);

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
    <TaskContext.Provider
      value={React.useMemo(
        () => ({
          onAddTask: onAddTaskHandler,
          onDeleteTask: deleteTaskHandler,
          onTaskClick: taskClickHandler,
          onFilterChange: taskFilterHandler,
          filteredTasks,
        }),
        [filteredTasks]
      )}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
export { TaskContextProvider };
