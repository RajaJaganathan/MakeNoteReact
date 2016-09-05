import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import NotesContainer from './NotesContainer.jsx';
import Contact from './Contact.jsx';
import Aboutus from './Aboutus.jsx';

export default (
  <Route path="/" component={App} >
      <IndexRoute component={NotesContainer}/>
      <Route path="/contact" component={Contact} />
      <Route path="/aboutus" component={Aboutus} />
    </Route>
);
