import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import NotesContainer from './components/NotesContainer.jsx';
import Contact from './components/Contact.jsx';
import Aboutus from './components/Aboutus.jsx';

export default (<Route path="/" component={App} >
  <IndexRoute component={NotesContainer}/>
  <Route path="/contact" component={Contact} />
  <Route path="/aboutus" component={Aboutus} />
</Route>);