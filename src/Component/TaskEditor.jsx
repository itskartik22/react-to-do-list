import { useContext, useState } from "react";
import {
  ViewDispatchContext,
  ViewContext,
  TasksContext,
  TasksDispatchContext,
} from "../Context/TasksContext";

export default function TaskEditor(props) {
  const tasks = useContext(TasksContext);
  const view = useContext(ViewContext);
  const dispatchTaskHandler = useContext(TasksDispatchContext);
  const dispatchViewHandler = useContext(ViewDispatchContext);
  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    _duedate: "2023-10-12",
  });
  // console.log(tasks)

  if (view.value === 2) {
    const task = tasks.find((t) => t.id === view.id);
    return (
      <div className="task-from w-1/2 h-screen mx-5 bg-gray-300 rounded-3xl">
        <div className="flex flex-col  p-5 text-lg ">
          <h2 className="text-2xl font-medium my-2">Tasks:</h2>
          <input
            id="task-input"
            className="text-sm p-2 rounded-md my-2"
            type="text"
            placeholder="Task Name"
            required
            // value={view.value && _task ? _task.data.task : taskData.task}
            value={task.data.task}
            onChange={(e) => {
              setTaskData({
                task: e.target.value,
                description: taskData.description,
                _duedate: taskData._duedate,
              });
            }}
          />
          <textarea
            className="text-sm p-2 rounded-md my-2 h-36"
            type="text"
            placeholder="Description"
            value={
              // view.value && _task ? _task.data.description : taskData.description
              task.data.description
            }
            onChange={(e) => {
              setTaskData({
                task: taskData.task,
                description: e.target.value,
                _duedate: taskData._duedate,
              });
            }}
          />
          <div className="my-2">
            <label className="mr-2 " htmlFor="">
              Date (mm/dd/yyyy) :
            </label>
            <input
              className="rounded-md ml-2 p-1 "
              type="date"
              value={task.data._duedate}
              // value={view.value && _task ? _task.data._duedate : taskData._duedate}
              onChange={(e) => {
                setTaskData({
                  task: taskData.task,
                  description: taskData.description,
                  _duedate: e.target.value,
                });
              }}
            />
          </div>
          <div className="task-button flex justify-between items-center my-4">
            <div>
              <button
                className="border-2 bg-red-600 text-white shadow-md py-2 px-3 rounded-md"
                onClick={() => {
                  // props.deleteTask(view.id);
                  dispatchTaskHandler({
                    type: "delete",
                    id: view.id,
                  });
                  dispatchViewHandler({
                    type: "create",
                  });
                  // handleSetView(false, null);
                }}
              >
                Delete Task
              </button>
              <button
                className="border-2 bg-red-600 text-white shadow-md py-2 px-3 rounded-md"
                onClick={() => {
                  // props.deleteAllTask();
                  dispatchTaskHandler({
                    type: "deleteAll",
                  });
                  dispatchViewHandler({
                    type: "create",
                  });
                }}
              >
                Delete All Task
              </button>
            </div>
            <div>
              {task.done ? (
                ""
              ) : (
                <button
                  className={`border-2 ${
                    task.done ? "bg-green-800" : "bg-yellow-600"
                  }  text-white shadow-md py-2 px-3 rounded-md`}
                  onClick={() => {
                    // props.taskCompleted(task.id);
                    setTaskData(task.data);
                    dispatchViewHandler({
                      type: "edit",
                      id: task.id,
                    });
                  }}
                >
                  Edit Task
                </button>
              )}
              <button
                className={`border-2 ${
                  task.done ? "bg-green-800" : "bg-yellow-600"
                }  text-white shadow-md py-2 px-3 rounded-md`}
                onClick={() => {
                  // props.taskCompleted(task.id);
                  dispatchTaskHandler({
                    type: "complete",
                    id: task.id,
                  });
                }}
              >
                {task.done ? "Completed " : "Complete"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (view.value === 3) {
    return (
      <div className="task-from w-1/2 h-screen mx-5 bg-gray-300 rounded-3xl">
        <div className="flex flex-col p-5 text-lg ">
          <h2 className="text-2xl font-medium my-2">Tasks:</h2>
          <input
            id="task-input"
            className="text-sm p-2 rounded-md my-2"
            type="text"
            placeholder="Task Name"
            required
            // value={view.value && _task ? _task.data.task : taskData.task}
            value={taskData.task}
            onChange={(e) => {
              setTaskData({
                task: e.target.value,
                description: taskData.description,
                _duedate: taskData._duedate,
              });
            }}
          />
          <textarea
            className="text-sm p-2 rounded-md my-2 h-36"
            type="text"
            placeholder="Description"
            value={
              // view.value && _task ? _task.data.description : taskData.description
              taskData.description
            }
            onChange={(e) => {
              setTaskData({
                task: taskData.task,
                description: e.target.value,
                _duedate: taskData._duedate,
              });
            }}
          />
          <div className="my-2">
            <label className="mr-2 " htmlFor="">
              Date (mm/dd/yyyy) :
            </label>
            <input
              className="rounded-md ml-2 p-1 "
              type="date"
              value={taskData._duedate}
              // value={view.value && _task ? _task.data._duedate : taskData._duedate}
              onChange={(e) => {
                setTaskData({
                  task: taskData.task,
                  description: taskData.description,
                  _duedate: e.target.value,
                });
              }}
            />
          </div>
          <div className="task-button flex justify-between items-center my-4">
            <button
              className="border-2 bg-red-600 text-white shadow-md py-2 px-3 rounded-md"
              onClick={() => {
                if (taskData.task !== "") {
                  setTaskData({
                    task: "",
                    description: "",
                    _duedate: "2023-10-12",
                  });
                }
              }}
            >
              Clear Task
            </button>
            <button
              className={`border-2 ${"bg-green-800"} text-white shadow-md py-2 px-4 rounded-md`}
              onClick={() => {
                if (taskData.task !== "") {
                  setTaskData({
                    task: "",
                    description: "",
                    _duedate: "2023-10-12",
                  });
                  dispatchTaskHandler({
                    type: "edit",
                    id: view.id,
                    taskData: taskData,
                  });
                  dispatchViewHandler({
                    type : "view",
                    id : view.id
                  })
                }
              }}
            >
              Save Task
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="task-from w-1/2 h-screen mx-5 bg-gray-300 rounded-3xl">
      <div className="flex flex-col p-5 text-lg ">
        <h2 className="text-2xl font-medium my-2">Tasks:</h2>
        <input
          id="task-input"
          className="text-sm p-2 rounded-md my-2"
          type="text"
          placeholder="Task Name"
          required
          // value={view.value && _task ? _task.data.task : taskData.task}
          value={taskData.task}
          onChange={(e) => {
            setTaskData({
              task: e.target.value,
              description: taskData.description,
              _duedate: taskData._duedate,
            });
          }}
        />
        <textarea
          className="text-sm p-2 rounded-md my-2 h-36"
          type="text"
          placeholder="Description"
          value={
            // view.value && _task ? _task.data.description : taskData.description
            taskData.description
          }
          onChange={(e) => {
            setTaskData({
              task: taskData.task,
              description: e.target.value,
              _duedate: taskData._duedate,
            });
          }}
        />
        <div className="my-2">
          <label className="mr-2 " htmlFor="">
            Date (mm/dd/yyyy) :
          </label>
          <input
            className="rounded-md ml-2 p-1 "
            type="date"
            value={taskData._duedate}
            // value={view.value && _task ? _task.data._duedate : taskData._duedate}
            onChange={(e) => {
              setTaskData({
                task: taskData.task,
                description: taskData.description,
                _duedate: e.target.value,
              });
            }}
          />
        </div>
        <div className="task-button flex justify-between items-center my-4">
          <button
            className="border-2 bg-red-600 text-white shadow-md py-2 px-3 rounded-md"
            onClick={() => {
              if (taskData.task !== "") {
                setTaskData({
                  task: "",
                  description: "",
                  _duedate: "2023-10-12",
                });
              }
            }}
          >
            Clear Task
          </button>
          <button
            className={`border-2 ${
              taskData.task.length === 0 ? "bg-yellow-500" : "bg-green-800"
            } text-white shadow-md py-2 px-4 rounded-md`}
            onClick={() => {
              if (taskData.task !== "") {
                setTaskData({
                  task: "",
                  description: "",
                  _duedate: "2023-10-12",
                });
                // console.log(taskData)
                // props.addNewTask(taskData);
                dispatchTaskHandler({
                  type: "added",
                  id: props.nextId,
                  taskData: taskData,
                });
                props.incId();
              }
            }}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
