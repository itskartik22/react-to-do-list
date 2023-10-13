import Task from "./Task.jsx";

export default function TaskList(props) {
  const tasks = props.tasks;
  const taskStack = tasks.map((t) => {
    return (
      <Task
        key={t.id}
        id={t.id}
        data={t.data}
        done={t.done}
        viewSet = {props.viewSet}
        completeTask={() => {
          props.onCompleteTask(t.id);
        }}
        deleteTask={() => {
          props.onDeleteTask(t.id);
        }}
      />
    );
  });
  return (
    <ul className="task-list w-full h-full rounded-md overflow-y-scroll mt-3">
      {taskStack}
    </ul>
  );
}
