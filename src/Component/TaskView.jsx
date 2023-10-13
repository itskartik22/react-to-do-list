// import { useState } from "react";
import { PiPlusBold } from "react-icons/pi";
export default function TaskView(props) {
  const date = new Date().toDateString();
  return (
    <div className="w-full">
      <h1 className="header text-4xl font-semibold text-slate-800 self-start">
        Today Tasks
      </h1>
      <h4 className="self-start mb-3 mx-1 mt-1 text-lg font-medium">{date}</h4>
      <div
        className="flex items-center w-full  py-2 px-3 border-2 border-slate-400 rounded-md shadow-lg"
        onClick={() => {
          props.viewSet(false, null);
        }}
      >
        <PiPlusBold className="text-xl mx-1" />
        <label className="w-full w-full text-lg font-medium" htmlFor="task-input">
          Add New Task
        </label>
      </div>
    </div>
  );
}
