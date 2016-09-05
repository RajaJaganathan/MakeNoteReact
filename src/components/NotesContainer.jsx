import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as notesAction from '../actions/noteActions';

import Notes from './Notes.jsx';
import AddNote from './AddNote.jsx';

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getInitialState();
    this.onAddNote = this.onAddNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onFilterNote = this.onFilterNote.bind(this);
    this.onSortBy = this.onSortBy.bind(this);
    this.originalNotes = [];
    this.fetchNoteRequest = null;
    debugger;
    console.log(this.props);
  }

  _getInitialState() {
    return {
      notes: []
    };
  }

  componentDidMount() {
    // this.fetchNoteRequest = $.ajax('mockdata/notes.json').then((res) => {
    //   this.setState({ notes: res });
    //   this.originalNotes = _.clone(res);
    // });

    this.props.actions.loadNotes();
  }

  componentWillUnmount() {

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
        <AddNote onAddNote={this.onAddNote}/>
        <Notes notes={this.state.notes} onDelete={this.onDeleteNote}/>
      </div>
    )
  }
}


function mapStatestoProps(state, ownProps) {
  debugger;
  return {
    notes: state.notes
  };
}

function mapDispatchtoProps(dispatch) {  
  return {
    actions: bindActionCreators(notesAction, dispatch)
  };
}

export default connect(mapStatestoProps, mapDispatchtoProps)(NotesContainer);
