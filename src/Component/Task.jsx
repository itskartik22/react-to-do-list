import { useContext } from "react";
import { BiRightArrow } from "react-icons/bi";
import { ViewDispatchContext } from "../Context/TasksContext";

export default function Task(props) {
  const dispatchViewHandler = useContext(ViewDispatchContext);
  return (
    <div
      className="flex w-full items-center justify-between border-slate-200 border-2 rounded-md mt-1 shadow-md"
      onClick={() => {
        dispatchViewHandler({
          type : "view",
          id : props.id
        })
      }}
    >
      <li
        id={props.id}
        className="text-md  list-none mx-2 p-2"
        style={
          {
            // textDecoration: props.done ? "line-through" : "none",
          }
        }
      >
        {props.data.task}
        <label className="text-sm text-green-800 mx-2 font-medium">
          {props.done ? "(Completed)" : ""}
        </label>
      </li>
      <div className="flex items-center text-2xl">
        <BiRightArrow className="mx-2 text-green-800  rounded-full" />
      </div>
    </div>
  );
}
