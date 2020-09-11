import React from 'react';
import {connect} from 'react-redux';

export function Navigation(props) {
  const {tasks} = props;
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='/'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWdc0DCW_YWH771MGSP82pgKkHjsM3hmJN7A&usqp=CAU'
          width='40'
          height='40'
          alt=''
          loading='lazy'
        />
        <span
          className='badge badge-pill ml-2 py-1 px-2'
          style={{background: '#00A8EC', color: '#fff'}}
        >
          {tasks.length}
        </span>
      </a>
    </nav>
  );
}

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
