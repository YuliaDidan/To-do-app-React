import React from 'react';

const CompletedTask = ({ task, handleDelete, toTasks}) => {
    return <form key={task.key}>
              <input value={task.text} readOnly />
              <button type="submit" onClick={e => {
                e.preventDefault();
                return handleDelete(e,task)}}>
                Delete
              </button>
              <button type="submit" onClick={e => {
                e.preventDefault();
                return toTasks(e, task);}}>
                To Tasks
              </button>
            </form>
}

export default CompletedTask;