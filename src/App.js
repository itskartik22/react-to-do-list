import { useState, useReducer } from "react";
import TaskView from "./Component/TaskView.jsx";
import TaskList from "./Component/TaskList.jsx";
// import bg from './Component/glowing-lines-human-heart-3d-shape-dark-background-generative-ai (1).jpg'
import TaskEditor from "./Component/TaskEditor.jsx";

export default function App() {
  const [view, setView] = useState({
    value: false,
    id: null,
  });
  const handleSetView = (val, i) => {
    setView({
      value: val,
      id: i,
    });
  };
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

  const [nextId, setId] = useState(3);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const handleAddTask = (taskData) => {
    dispatch({
      type: "added",
      id: nextId,
      taskData: taskData,
    });
    setId(nextId + 1);
  };
  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "delete",
      id: taskId,
    });
    handleSetView(false, null);
  }
  const handleDeleteAllTask = () => {
    dispatch({
      type : 'deleteAll'
    })
    handleSetView(false, null);
  }
  const handleCompleteTask = (taskId) => {
    dispatch({
      type: "complete",
      id : taskId
    })
  }
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="main-box flex flex-col items-center justify-evenly w-1/2 h-screen rounded-lg mx-5 p-4">
        <TaskView viewSet={handleSetView} />
        <TaskList
          tasks={tasks}
          // onCompleteTask={handleCompleteTask}
          viewSet={handleSetView}
        />
      </div>
      <div className="task-from w-1/2 h-screen mx-5 bg-gray-300 rounded-3xl">
        <TaskEditor
          addNewTask={handleAddTask}
          deleteTask={handleDeleteTask}
          deleteAllTask={handleDeleteAllTask}
          taskCompleted={handleCompleteTask}
          view={view}
          tasks={tasks}
        />
      </div>
    </div>
  );
}

function tasksReducer(tasks, action) {
  if (action.type === "added") {
    return [
      ...tasks,
      {
        id: action.id,
        data: {
          task: action.taskData.task,
          description: action.taskData.description
            ? action.taskData.description
            : "",
          _duedate: action.taskData._duedate,
        },
        done: false,
      },
    ];
  } else if (action.type === "delete") {
    return tasks.filter((t) => t.id !== action.id);
  } else if (action.type === "complete") {
    const newTasks = tasks.map((task) => {
      if (task.id === action.id && task.done !== true) {
        return {
          id: task.id,
          data : task.data,
          done: !task.done ? true : false,
        };
      } else return task;
    });
    return newTasks;
  } else if(action.type === "deleteAll") {
    return [];
  } 
  else {
    throw Error("Unknown action: " + action.type);
  }
}
