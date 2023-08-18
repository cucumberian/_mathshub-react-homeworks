function uid() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ""
  );
}

// фильтрация задач по фильтру
function filterTask(tasksObj, filterValue) {
  if (filterValue === "filter-all") {
    return tasksObj;
  }
  if (filterValue === "filter-completed") {
    const newTasks = {};
    Object.values(tasksObj)
      .filter((task) => task.isCompleted)
      .forEach((task) => {
        newTasks[task.id] = task;
      });
    return newTasks;
  }
  if (filterValue === "filter-uncompleted") {
    const newTasks = {};
    Object.values(tasksObj)
      .filter((task) => !task.isCompleted)
      .forEach((task) => {
        newTasks[task.id] = task;
      });
    return newTasks;
  }

  console.error("unknwown taskFilterValue =", filterValue);
  return null;
}

export { uid, filterTask };
