import React from 'react';
import CompletedTask from './CompletedTask';

class CompletedTasks extends React.Component {
  render() {
    const completes = this.props.complete.map((el, index) => {
      return <CompletedTask
      key={index}
      task={el}
      handleDelete={this.props.delete}
      toTasks={this.props.totasks} />     
    });  
      return <ul>{completes}</ul>
  }
}

export default CompletedTasks;