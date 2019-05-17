import React from 'react';
import InsertBar from './InsertBar';
import TaskList from './TaskList';
import CompletedTasks from './CompletedTasks';

class App extends React.Component {
  state = { tasks: [], completed: []};

  addTask = (value) => {    
    const tasks = [...this.state.tasks, value]
    this.setState({tasks: tasks});    
  }

  deleteTask = (e, value) => { 
    const tasks =  this.state.tasks.filter(elem => (elem !== value));   
    this.setState({tasks: tasks});
  }

  completeTask = (e, value) => {     
    const completedTask = [...this.state.completed, value];
    const tasks = this.state.tasks.filter(elem => (elem !== value));
    this.setState({tasks: tasks,
                  completed: completedTask});
  }

  deleteComplete = (e, value) => {
    const completed = this.state.completed.filter(elem => (elem !== value))  
    this.setState({completed: completed});
  }

  pushToTasks = (e, value) => {    
    const tasks = [...this.state.tasks, value];
    const completed = this.state.completed.filter(elem => (elem !== value)); 
    this.setState({completed: completed,
                   tasks: tasks });
  } 

  saveTask = (value) => {           
      const getIndex = (arr, key) => {
        for (let el of arr) {
          if(el.key === key) {
             return arr.indexOf(el)  
          }
        }
      }
      this.state.tasks.splice(getIndex(this.state.tasks, value.key), 1, value);
      this.setState({tasks: this.state.tasks});
  }
  
  render() {
    console.log(this.state)    
    return <div>
      <InsertBar onSubmit={this.addTask} />
      <div>To-do tasks</div>
      <TaskList      
        tasks={this.state.tasks}
        change={this.onChange}
        save={this.saveTask}
        complete={this.completeTask}
        delete={this.deleteTask}
      />
       <div>Completed tasks</div>
      <CompletedTasks
        complete={this.state.completed}
        delete={this.deleteComplete}
        totasks={this.pushToTasks}
      />
      </div>
  };
};

export default App;