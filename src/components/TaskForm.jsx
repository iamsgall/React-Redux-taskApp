import React, {useReducer} from 'react';
import {connect} from 'react-redux';
import {addTask} from '../store/actions/action';

export const TaskForm = props => {
  const {addTask} = props;

  const [task, setTask] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      title: '',
      responsible: '',
      description: '',
      priority: 'low',
    }
  );

  const handleSubmit = e => {
    console.log(task);
    addTask(task);
    setTask({
      title: '',
      responsible: '',
      description: '',
      priority: 'low',
    });

    e.preventDefault();
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setTask({[name]: value});
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              placeholder='Title'
              name='title'
              value={task.title}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              placeholder='Responsible'
              name='responsible'
              value={task.responsible}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              placeholder='Description'
              name='description'
              value={task.description}
              onChange={handleChange}
            />
          </div>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='inputGroupSelect01'>
                Options
              </label>
            </div>
            <select
              className='custom-select'
              id='inputGroupSelect01'
              name='priority'
              value={task.priority}
              onChange={handleChange}
            >
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='hight'>Hight</option>
            </select>
          </div>
          <button
            className='btn float-right'
            type='submit'
            style={{background: '#00A8EC', color: '#fff'}}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
