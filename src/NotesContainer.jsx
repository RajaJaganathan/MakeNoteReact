import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Notes from './Notes.jsx';
import AddNote from './AddNote.jsx';

class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getInitialState();
    this.onAddNote = this.onAddNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onFilterNote = this.onFilterNote.bind(this);
    this.onSortBy = this.onSortBy.bind(this);
    this.originalNotes = [];
  }

  _getInitialState() {
    return {
      notes: []
    };
  }

  componentDidMount() {
    this.fetchNoteRequest = $.ajax('notes.json').then((res) => {
      this.setState({ notes: res });
      this.originalNotes = _.clone(res);
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
    this.originalNotes = _.clone(this.state.notes);
    this.setState({ notes: this.state.notes });
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
    return (
      <div className="notes-container">
      assadsad
        <AddNote onAddNote={this.onAddNote}/>
        <Notes notes={this.state.notes} onDelete={this.onDeleteNote}/>
      </div>
    )
  }
}