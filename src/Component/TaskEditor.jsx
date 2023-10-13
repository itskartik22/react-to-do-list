import { useState } from "react";

export default function TaskEditor(props) {
  const view = props.view;
  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    _duedate: "2023-10-12",
  });

  if (view.value && view.id !== null) {
    const task = props.tasks.find((t) => t.id === view.id);
    return (
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
                props.deleteTask(view.id);
              }}
            >
              Delete Task
            </button>
          <button
              className="border-2 bg-red-600 text-white shadow-md py-2 px-3 rounded-md"
              onClick={() => {
                props.deleteAllTask();
              }}
            >
              Delete All Task
            </button>
            </div>
            <button className={`border-2 ${task.done ? "bg-green-800" : "bg-yellow-600"}  text-white shadow-md py-2 px-3 rounded-md`} onClick={() => {
              props.taskCompleted(task.id)
            }}>
              {task.done ? "Completed " : "Complete"}
            </button>
        </div>
      </div>
    );
  }
  return (
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
                props.addNewTask(taskData);
              }
            }}
          >
            Add Task
          </button>
      </div>
    </div>
  );
}
