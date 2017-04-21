import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './stores/configureStore';

import routes from './routes';

import Notes from './components/Notes';
import AddNote from './components/AddNote';

import NotesContainer from './components/NotesContainer';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Header from './layout/Header';

const store = configureStore();

function run() {
  ReactDOM.render((
    <Provider store={store}>
      <Router history={browserHistory} >
        {routes}
      </Router>
    </Provider>
  ), document.getElementById('root'));
}

run();

store.subscribe(run);