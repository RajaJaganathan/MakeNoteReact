import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotesContainer from './components/NotesContainer';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';

export default (<Route path="/" component={App} >
  <IndexRoute component={NotesContainer}/>
  <Route path="/contact" component={Contact} />
  <Route path="/aboutus" component={Aboutus} />
</Route>);