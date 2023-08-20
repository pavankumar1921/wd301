/* eslint-disable no-unused-vars */
import React from "react";
import TaskCard from "./TaskCard";
function App() {
  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="col-start-2 col-span-2 py-4">
        <h1 className="text-xl font-bold">Smarter Tasks</h1>
        <p><b className="font-semibold">Project : </b>Graduation Final Year Project (Revamp College Website)</p>
        </div>
        
      </div>
      <div className="grid grid-cols-5">
        <div className="TaskCell col-start-2 col-span-1 rounded">
          <h1 className="text-center text-gray-600 text-xl py-3 font-bold">Pending</h1>
          <TaskCard title="Build the website with static content" dueDate={new Date(2023,5,2)} assigneeName="Pavan Kumar" statusOfTask="pending"/>
          <TaskCard title="Add a blog" dueDate={new Date(2023,3,28)} assigneeName="Sandeep" statusOfTask="pending"/>
          <div className="bg-gray-300 rounded px-2 py-1">
            <h3>+ New Task</h3>
          </div>
        </div>
        <div className="TaskCell col-start-4 col-span-1">
          <h1 className="text-center text-gray-600 text-xl py-3 font-bold">Done</h1>
          <TaskCard title="Design the mockup" completedAtDate={new Date(2023,5,10)} assigneeName="Nithin" statusOfTask="completed"/>
          <TaskCard title="Get the appproval from principal" completedAtDate={new Date(2023,4,16)} assigneeName="Vineeth" statusOfTask="completed" />
        </div>  
      </div>
    </div>
  )
}
export default App