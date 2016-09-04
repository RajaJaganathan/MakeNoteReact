import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Header from './Header.jsx';
import Notes from './Notes.jsx';
import AddNote from './AddNote.jsx';

class MakeNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getInitialState();
    this.onAddNote = this.onAddNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
  }

  _getInitialState() {
    return {
      notes: []
    };
  }

  componentDidMount() {
    this.fetchNoteRequest = $.ajax('notes.json').then((res) => {
      this.setState({ notes: res });
    });
  }

  componentWillUnmount() {
    this.fetchNoteRequest.abort();
  }

  onDeleteNote(note) {
    var notes = _.remove(this.state.notes, note);
    this.setState({ notes: this.state.notes });
  }

  onAddNote(note) {
    var newNote = Object.assign({}, note);
    this.state.notes.push(newNote);
    this.setState({ notes: this.state.notes });
  }

  render() {
    return <div className="page-wrapper">
      <Header/>
      <div className="container">
        <AddNote onAddNote={this.onAddNote}/>
        <Notes notes={this.state.notes} onDelete={this.onDeleteNote}/>
      </div>
    </div>;
  }
}

ReactDOM.render(<MakeNote/>, document.getElementById('root'));