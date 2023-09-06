/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}
const TaskApp = (_props:TaskAppProp) => {

  const [taskAppState,setTaskAppState]=useLocalStorage<TaskAppState>("tasks",{
    tasks:[]
  })
  
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  const handleRemovedTask =(idx:number) :void =>{
    const changeTasks = taskAppState.tasks.filter(
      (_,index)=> index !==idx
    )
    setTaskAppState({tasks:changeTasks})
  }
  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">
        Smarter Tasks
      </h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} handleRemovedTask = {(idx)=>handleRemovedTask(idx)}/>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
