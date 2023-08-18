/* eslint-disable react/jsx-no-constructed-context-values */
import React from "react";
import TaskList from "../TaskList/TaskList";
import Card from "../UI/Card/Card";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import "./Home.css";

import TaskContext from "../../context/task-context";

function Home() {
  const taskContext = React.useContext(TaskContext);

  return (
    <Card className="home">
      <h1>Home</h1>

      <AddTaskForm onAddTask={taskContext.onAddTask} />

      <TaskList tasks={taskContext.filteredTasks} />
    </Card>
  );
}

export default Home;
