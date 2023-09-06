/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  handleRemovedTask : (id:number) => void
}

const TaskList = (props:Props) =>{
  const list = props.tasks.map((task,idx)=>(
    <Task
    key={idx}
    item={task}
    removeTask={()=>props.handleRemovedTask(idx)}
    />
  ))
  return <>{list}</>; // shorthand notation for a react fragment
}

export default TaskList;
