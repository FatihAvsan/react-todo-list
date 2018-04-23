import React, { Component } from 'react';
import {TodoList} from './todoList';
import {TodoForm} from './todoForm';

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            myTasks: [
                {text:"yapılcak il iş", status:"passive"},
                {text:"kitap oku", status:"passive"},
                {text:"çok uyu", status:"passive"}
            ]
        };
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.doneTask = this.doneTask.bind(this);
    }
    
    addTask(val){
        let updatedList = this.state.myTasks;
        updatedList.push({text:val, status:"passive"});
        this.setState({myTasks: updatedList});
    }
    
    doneTask(task_id){
        task_id = task_id.replace('task_','');
        let updatedList = this.state.myTasks;
        let newStatus = 'active';
        let currentStatus = updatedList[task_id].status;
        if(currentStatus==='active'){
            newStatus = 'passive';
        }
        updatedList[task_id].status = newStatus;
        this.setState({myTasks: updatedList});
    }
    
    removeTask(task_id){
        task_id = task_id.replace('task_','');
        let updatedList = this.state.myTasks;
        updatedList.splice(task_id, 1);
        this.setState({myTasks: updatedList});
        
        console.log(task_id+ 'silindi');
    }

  render() {
    return (
      <div className="content">
        <TodoForm addTask={this.addTask}/>
        <TodoList myTasks = {this.state.myTasks} doneTask={this.doneTask} removeTask={this.removeTask} /> 
      </div>
    );
  }
}

export default App;
