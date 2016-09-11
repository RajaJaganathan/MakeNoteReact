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
    this.state = {};
    this.onAddNote = this.onAddNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);   
    this.originalNotes = [];
    this.fetchNoteRequest = null;
    
  }

  _getInitialState() {
    return 
  }

  componentDidMount() {
      this.props.actions.loadNotes();
  }

  componentWillUnmount() {

  }

  onDeleteNote(note) {
    var notes = _.remove(this.state.notes, note);   
    this.props.actions.deleteNote(note);    
  }

  onAddNote(note) {    
    var newNote = Object.assign({}, note);
    this.props.actions.addNote(newNote);    
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

  render() {
    console.log('render this.props.notes', this.props.notes);
    return (
      <div className="notes-container">
        <AddNote onAddNote={this.onAddNote}/>
        <Notes notes={this.props.notes} onDelete={this.onDeleteNote}/>
      </div>
    )
  }
}


function mapStatestoProps(state, ownProps) {  
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
