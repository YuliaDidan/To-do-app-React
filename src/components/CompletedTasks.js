import React from 'react';
import CompletedTask from './CompletedTask';

class CompletedTasks extends React.Component {
  render() {
    const complete = this.props.complete;
    let completes;
      if(complete.length > 0) {
          completes = complete.map((el, index) => {
          return <CompletedTask
          key={index}
          task={el}
          handleDelete={this.props.delete}
          toTasks={this.props.totasks} />     
        }); 
      } else {
        completes = <p>You have yet to complete any tasks</p>
      }     
      return <ul>{completes}</ul>
  }
}

export default CompletedTasks;