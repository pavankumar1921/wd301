/* eslint-disable react/prop-types */
import './TaskCard.css'

const TaskCard = (props) => {
  const status = props.statusOfTask
  console.log(props)
    return (
      <div className="TaskItem rounded-lg py-3 px-2">
        <h2 className="text-xl font-bold">{props.title}</h2>
        {status === 'pending' ? (
          <p>Due Date : {props.dueDate}</p>
        ):(
          <p>Completed On : {props.completedAtDate}</p>
        )}
        <p>Assignee : {props.assigneeName}</p>
      </div>
    )
}

export default TaskCard