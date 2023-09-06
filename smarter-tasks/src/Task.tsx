// import React from "react";
import { TaskItem } from "./types";

interface TaskProp {
  item:TaskItem;
  removeTask:(task:TaskItem) =>void
}
// class Task extends React.Component<TaskProp> {
//   render() {
//     return (
//       <div className="TaskItem shadow-md border border-slate-100">
//         <h2 className="text-base font-bold my-1">{this.props.title}</h2>
//         <p className="text-sm text-slate-500">Due Date: {this.props.dueDate}</p>
//         <p className="text-sm text-slate-500">
//           Description: {this.props.description}
//         </p>
//       </div>
//     );
//   }
// }
const Task = (props:TaskProp) => {
  const {item,removeTask} = props
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{item.title}</h2>
      <p className="text-sm text-slate-500">{item.dueDate}</p>
      <p className="text-sm text-slate-500">
        Description: {item.description}
      </p>
      <button className="deleteTaskButton bg-gray-300 hover:bg-gray-600" onClick={()=>removeTask(item)}>Delete Task</button>
    </div>
  );
}
export default Task;
