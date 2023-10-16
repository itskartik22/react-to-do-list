import { useState, useReducer } from "react";
import TaskContainer from "./Component/TaskContainer.jsx";
// import bg from './Component/glowing-lines-human-heart-3d-shape-dark-background-generative-ai (1).jpg'
import TaskEditor from "./Component/TaskEditor.jsx";
import tasksReducer from "./Reducer/TaskReducer.js";
import {
  ViewContext,
  ViewDispatchContext,
  TasksContext,
  TasksDispatchContext,
} from "./Context/TasksContext.js";

export default function App() {
  const [nextId, setId] = useState(3);
  const [tasks, dispatchTaskHandler] = useReducer(tasksReducer, initialTasks);
  const [view, dispatchViewHandler] = useReducer(viewReducer, {
    value: 1,
    id: null,
  })
  // const handleSetView = (val, i) => {
  //   dispatchTaskHandler({
  //     type : "change",
  //     id : i,
  //     mode : val,
  //   })
  // };

  // const handleAddTask = (taskData) => {
  //   dispatchTaskHandler({
  //     type: "added",
  //     id: nextId,
  //     taskData: taskData,
  //   });
  //   setId(nextId + 1);
  // };
  // const handleDeleteTask = (taskId) => {
  //   dispatchTaskHandler({
  //     type: "delete",
  //     id: taskId,
  //   });
  //   handleSetView(false, null);
  // };
  // const handleDeleteAllTask = () => {
  //   dispatchTaskHandler({
  //     type: "deleteAll",
  //   });
  //   handleSetView(false, null);
  // };
  // const handleCompleteTask = (taskId) => {
  //   dispatchTaskHandler({
  //     type: "complete",
  //     id: taskId,
  //   });
  // };
  const handleIncId = () => {
    setId(nextId + 1);
    // console.log(nextId)
  };
  return (
    <div className="w-screen h-screen flex flex-row">
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatchTaskHandler}>
          <ViewContext.Provider value={view}>
            <ViewDispatchContext.Provider value = {dispatchViewHandler}>
              <TaskContainer
              // viewSet={handleSetView}
              // tasks={tasks}
              // onCompleteTask={handleCompleteTask}
              />
              <TaskEditor
                // addNewTask={handleAddTask}
                // deleteTask={handleDeleteTask}
                // deleteAllTask={handleDeleteAllTask}
                // taskCompleted={handleCompleteTask}
                nextId = {nextId}
                incId={handleIncId}
                // view={view}
                // tasks={tasks}
              />
            </ViewDispatchContext.Provider>
          </ViewContext.Provider>
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </div>
  );
}

const initialTasks = [
  {
    id: 0,
    data: {
      task: "English Practice",
      description: "Improve English Vocabulary by practicing it.",
      _duedate: "2024-04-12",
    },
    done: true,
  },
  {
    id: 1,
    data: {
      task: " Open-Source Contribution",
      description:
        "Start focusing on GSOC'24 by contributing on open source project.",
      _duedate: "2023-12-03",
    },
    done: false,
  },
  {
    id: 2,
    data: {
      task: "GSOC'24 Beginning",
      description:
        "Fully focus on Selected open-source project. Contribute with full dedication to it.",
      _duedate: "2024-02-05",
    },
    done: false,
  },
];

const viewReducer = (view, action) => {
  if(action.type === "create"){
    return {
      value : 1, ///Create === 1
      id : null
    }
  }
  else if(action.type === "view"){
    return {
      value : 2,  ///View === 2
      id : action.id
    }
  }
  else if(action.type === "edit") {
    return {
      value : 3,   ///edit === 3
      id : action.id,

    }
  }
  else {
    throw Error("Unknown action: " + action.type);
  }
}