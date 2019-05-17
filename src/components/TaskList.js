import React from 'react';
import Task from './Task'

class TaskList extends React.Component { 
  state = {value: {text: '', key: null}}

  onChange = (event) => {    
    this.setState({value: {text: event.target.value, key: +event.target.id }});
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.save(this.state.value);
    this.setState({value: {text: '', key: ''}});
  }
  
  render() {
    const tasks = this.props.tasks;
    let notes;
      if(tasks.length > 0) {
        notes = tasks.map((el, index) => {      
            return <Task
              key={index} 
              onChange={this.onChange} 
              onFormSubmit={this.onFormSubmit} 
              task={el} 
              onComlete={this.props.complete} 
              handleDelete={this.props.delete}
              />
          })
      } else {
        notes = <p>You have nothing to-do</p>
    }
    return <ul>{notes}</ul>
  };   
}





export default TaskList;