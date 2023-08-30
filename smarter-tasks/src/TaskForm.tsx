import React from "react";
import { TaskItem } from "./types";
import "./TaskCard.css"

interface TaskFormProps {
addTask:(task: TaskItem) => void;
}
interface TaskFormState {
    title:string,
    dueDate:string,
    description:string
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
constructor(props: TaskFormProps) {
super(props);
this.state={
    title: "",
    dueDate: "",
    description: "",
}
}
addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
title: this.state.title,
dueDate: this.state.dueDate,
description: this.state.description
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
    this.setState({dueDate: ""});
    this.setState({ description: ""})
  };
titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
};
dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
    this.setState({dueDate: event.target.value})
}
descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
    this.setState({description: event.target.value})
}
render(){
    return (
        <div>
            <form onSubmit={this.addTask}>
                <div className="p-4">
                <label className="">Title: </label>
                <input type="text" className="p-2 border border-gray-300 rounded text-sm font-medium text-gray-700" id="todoTitle" value={this.state.title} onChange={this.titleChanged}/>
                </div>
                <div className="p-4">
                <label>DueDate:</label>
                <input id="todoDescription" className="p-2 border border-gray-300 rounded text-sm font-medium text-gray-700" value={this.state.description} onChange={this.descriptionChanged}/>
                </div>
                <div className="p-4">
                <label>Description:</label>
                <input id="todoDueDate" className="p-2 border border-gray-300 rounded text-sm font-medium text-gray-700" value={this.state.dueDate} onChange={this.dueDateChanged}/>
                </div>
                <div className="place-content-center">
                <button id="addTaskButton" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" type="submit">Add item</button>
                </div>
                
            </form>
        </div>
    )
}
}
export default TaskForm;