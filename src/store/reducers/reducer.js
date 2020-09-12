import {createStore} from 'redux';

const initialState = {
  tasks: [
    {
      title: 'title 1',
      responsible: 'responsible 1',
      description: 'description 1',
      priority: 'low',
    },
    {
      title: 'title 2',
      responsible: 'responsible 2',
      description: 'description 2',
      priority: 'medium',
    },
    {
      title: 'title 3',
      responsible: 'responsible 3',
      description: 'description 3',
      priority: 'hight',
    },
  ],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ADD_TASK':
      return {...state, tasks: [...state.tasks, payload.task]};
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== payload.index),
      };

    default:
      return state;
  }
  // return state;
};

export default createStore(reducer);
