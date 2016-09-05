import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory } from 'react-router';

import Header from './layout/Header.jsx';
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx';

import NotesContainer from './components/NotesContainer.jsx';
import Contact from './components/Contact.jsx';
import Aboutus from './components/Aboutus.jsx';

// import routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onFilterNote = this.onFilterNote.bind(this);
    this.onSortBy = this.onSortBy.bind(this);
    this.originalNotes = [];
  }

  onFilterNote(title) {

    var result;

    if (!title) {
      result = this.originalNotes;
    } else {
      result = _.filter(this.originalNotes, (item, idx) => {
        return item.title.toLowerCase().indexOf(title.toLowerCase()) > -1;
      });
    }

    this.setState({ notes: result });
  }

  onSortBy(field) {
    var result = _.orderBy(this.state.notes, field);
    this.setState({ notes: result });
  }

  render() {
    return (<div className="page-wrapper">
      <Header onFilterNote={this.onFilterNote} onSortBy={this.onSortBy}/>
      <div className="container">
        {this.props.children}
      </div>
    </div>);
  }
}

ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={NotesContainer}/>
      <Route path="/contact" component={Contact} />
      <Route path="/aboutus" component={Aboutus} />
    </Route>
  </Router>
), document.getElementById('root'));

export default App;