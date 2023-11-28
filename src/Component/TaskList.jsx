import Task from "./Task.jsx";
import { useContext } from "react";
import { TasksContext} from "../Context/TasksContext.js";

export default function TaskList(props) {
  const tasks = useContext(TasksContext);
  const taskStack = tasks.map((t) => {
    return (
      <Task
        key={t.id}
        id={t.id}
        data={t.data}
        done={t.done}
        // viewSet = {props.viewSet}
        // completeTask={() => {
        //   // props.onCompleteTask(t.id);
        //   dispatch({
        //     type: "complete",
        //     id: t.id,
        //   });
        // }}
        // deleteTask={() => {
        //   // props.onDeleteTask(t.id);
        //   dispatch({
        //     type: "delete",
        //     id: t.id,
        //   });
        // }}
      />
    );
  });
  return (
    <ul className="task-list w-full h-full rounded-md overflow-y-scroll mt-3">
      {taskStack}
    </ul>
  );
}
