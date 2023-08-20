/* eslint-disable react/prop-types */
import React from 'react'
import './TaskCard.css'

interface taskcardProperties {
  title:string;
  statusOfTask:string;
  dueDate?:Date;
  completedAtDate?:Date;
  assigneeName:string;
}
const TaskCard : React.FC<taskcardProperties> = (props) => {
  const status = props.statusOfTask
  console.log(props)
    return (
      <div className="TaskItem rounded-lg py-3 px-2">
        <h2 className="text-xl font-bold">{props.title}</h2>
        {status === 'pending' ? (
          <p>Due Date : {props.dueDate?.toISOString().slice(0,10)}</p>
        ):(
          <p>Completed On : {props.completedAtDate?.toISOString().slice(0,10)}</p>
        )}
        <p>Assignee : {props.assigneeName}</p>
      </div>
    )
}

export default TaskCard