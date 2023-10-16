import { useContext } from "react";
import { PiPlusBold } from "react-icons/pi";
import { ViewDispatchContext } from "../Context/TasksContext";


export default function TaskHeader(props) {
    const date = new Date().toDateString();
    const dispatchViewHandler = useContext(ViewDispatchContext)
  return (
    <div className="w-full">
      <h1 className="header text-4xl font-semibold text-slate-800 self-start">
        Today Tasks
      </h1>
      <h4 className="self-start mb-3 mx-1 mt-1 text-lg font-medium">{date}</h4>
      <div
        className="flex items-center w-full  py-2 px-3 border-2 border-slate-400 rounded-md shadow-lg"
        onClick={() => {
          dispatchViewHandler({
            type: "create"
          })
        }}
      >
        <PiPlusBold className="text-xl mx-1" />
        <label className="w-full text-lg font-medium" htmlFor="task-input">
          Add New Task
        </label>
      </div>
    </div>
  );
}
