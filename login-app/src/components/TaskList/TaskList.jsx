import React, { useContext, useCallback, useMemo } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../../context/task-context";
import "./TaskList.css";

function TaskList({ tasks }) {
  const taskContext = useContext(TaskContext);

  // преобразуем объект задач в список задач для вывода через map
  const taskList = useMemo(
    () => Object.values(tasks).reduce((acc, task) => [...acc, task], []),
    [tasks]
  );

  // при измененении селекта отправляем занчение option наверх
  const filterTaskHandler = useCallback((e) => {
    const filterValue = e.target[e.target.selectedIndex].value;
    taskContext.onFilterChange(filterValue);
  }, []);

  return (
    <div className="task_list">
      <select onChange={filterTaskHandler} size="3">
        <option value="filter-all">все</option>
        <option value="filter-completed">завершенные</option>
        <option value="filter-uncompleted">незавершенные</option>
      </select>

      {taskList.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default React.memo(TaskList);
