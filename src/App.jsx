import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './stores/configureStore';

import routes from './routes.jsx';

import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx';

import NotesContainer from './components/NotesContainer.jsx';
import Contact from './components/Contact.jsx';
import Aboutus from './components/Aboutus.jsx';
import Header from './layout/Header.jsx';

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