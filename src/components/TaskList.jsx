import React from 'react';
import {connect} from 'react-redux';
import {deleteTask} from '../store/actions/action';

export function TaskList(props) {
  const {tasks, deleteTask} = props;

  const handleClick = index => {
    if (window.confirm('Are you sure you want to delete it?')) {
      console.log(index);
      deleteTask(index);
    }
  };

  return (
    <div className='row'>
      {tasks.map((task, index) => (
        <div key={index} className='col-md-3'>
          <div className='card bg-light border-dark mb-3'>
            <div className='card-body'>
              <h5 className='card-title'>{task.title}</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                <mark>{task.responsible}</mark>
              </h6>
              <p className='card-tex text-center'>{task.description}</p>
              <span
                className='badge badge-pill float-right py-2 px-3'
                style={{background: '#00A8EC', color: '#fff'}}
              >
                {task.priority}
              </span>
            </div>
            <div className='card-footer'>
              <button
                type='button'
                className='btn btn-outline-danger btn-sm btn-block'
                onClick={() => handleClick(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
