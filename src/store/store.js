import {createStore, combineReducers, compose} from 'redux';
import reducer from './reducers/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = combineReducers({
  reducer,
});

export default createStore(store, composeEnhancers());
