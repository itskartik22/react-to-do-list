export default function tasksReducer(tasks, action) {
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
          data: task.data,
          done: !task.done ? true : false,
        };
      } else return task;
    });
    return newTasks;
  } else if (action.type === "deleteAll") {
    return [];
  } else if (action.type === "edit") {
    const newTasks = tasks.map((t) => {
      if (t.id === action.id) {
        return {
          id: action.id,
          data: {
            task: action.taskData.task,
            description: action.taskData.description
              ? action.taskData.description
              : "",
            _duedate: action.taskData._duedate,
          },
          done: false,
        };
      }
      return t;
    });
    return newTasks;
  } else {
    throw Error("Unknown action: " + action.type);
  }
}
