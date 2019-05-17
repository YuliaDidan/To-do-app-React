import React from 'react';

class InsertBar extends React.Component { 
  // inputElement = React.createRef();
  state = {value: {text: '', key: ''}}


  onChange = (event) => {       
    this.setState({value: {text: event.target.value, key: Date.now()}});    
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({value: {text: '', key: ''}});
  }

 
  render() {
    
    return <div>
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Task"          
          value={this.state.value.text}
          onChange={this.onChange} 
        />
        <button>Add task</button>
      </form>      
      </div>
  }
}





export default InsertBar;