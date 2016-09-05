import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import NoteContainer from './NoteContainer.jsx';
import Contact from './Contact.jsx';
import Aboutus from './Aboutus.jsx';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={NoteContainer}/>
    <Route path="contact" component={Contact} />
    <Route path="aboutus" component={Aboutus} />
  </Route>
);
