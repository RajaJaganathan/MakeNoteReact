import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialStore) {
    return createStore(rootReducer, initialStore, applyMiddleware(thunk));
}