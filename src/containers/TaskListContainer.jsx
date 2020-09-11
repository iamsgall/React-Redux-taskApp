import React from 'react';
import TaskList from '../components/TaskList';
import {connect} from 'react-redux';
// import {deleteTask} from '../store/actions/action';

export function TaskListContainer(props) {
  const {tasks} = props;
  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
}

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
