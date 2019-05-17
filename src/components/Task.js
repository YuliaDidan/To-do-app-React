import React from 'react';

const Task = ({onChange, onFormSubmit, task, onComlete, handleDelete }) => {
  return <form onSubmit={onFormSubmit} key={task.key}>
            <input defaultValue={task.text} id={task.key} onChange={onChange} />
            <button type="submit">
              Save
            </button>            
            <button type="submit" onClick={e => {
              e.preventDefault();
              return onComlete(e, task)}}>              
              Complete
            </button>
            <button type="submit" onClick={e => {
              e.preventDefault();
              return handleDelete(e, task)}}>
              Delete
            </button>
          </form>
}

export default Task;


// <div>
  //         {task}
  //         <button onClick={handleDelete}>Delete</button>          
  //         </div>