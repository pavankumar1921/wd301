/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  handleRemovedTask : (id:number) => void
}

interface State {}

// class TaskList extends React.Component<Props, State> {
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task
//         key={idx}
//         title={task.title}
//         dueDate={task.dueDate}
//         description={task.description}
//       />
//     ));
//   }
// }

const TaskList = (props:Props) =>{
  const list = props.tasks.map((task,idx)=>(
    <Task
    key={idx}
    // title={task.title}
    // description={task.description}
    // dueDate={task.dueDate}
    item={task}
    removeTask={()=>props.handleRemovedTask(idx)}
    />
  ))
  return <>{list}</>; // shorthand notation for a react fragment
}

export default TaskList;
