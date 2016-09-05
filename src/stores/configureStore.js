import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialStore){
  return createStore(rootReducer, initialStore);
}