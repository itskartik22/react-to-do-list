// import { useState } from "react";
import TaskList from "./TaskList.jsx";
import TaskHeader from "./TaskHeader.jsx";
export default function TaskContainer(props) {
  return (
    <div className="main-box flex flex-col items-center justify-evenly w-1/2 h-screen rounded-lg mx-5 p-4">
      <TaskHeader />
      <TaskList
        // tasks={props.tasks}
        // onCompleteTask={handleCompleteTask}
        // viewSet={props.viewSet}
      />
    </div>
  );
}
