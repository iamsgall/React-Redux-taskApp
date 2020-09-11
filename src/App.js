import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import reducer from './store/reducers/reducer';
import Navigation from './components/Navigation';
import TaskForm from './components/TaskForm';
import TaskListContainer from './containers/TaskListContainer';

function App() {
  return (
    <Provider store={reducer}>
      <div className='App'>
        <Navigation />.
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-9'>
              <TaskListContainer />
            </div>
            <div className='col-md-2 ml-5'>
              <TaskForm />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
