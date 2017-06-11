import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as notesAction from '../actions/noteActions';

import _ from 'lodash';

import Notes from './Notes';
import AddNote from './AddNote';

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onAddNote = this.onAddNote.bind(this);
        this.onDeleteNote = this.onDeleteNote.bind(this);
        this.originalNotes = [];
    }

    componentDidMount() {
        this.props.actions.loadNotes();
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
            result = _.filter(this.originalNotes, item => {
                return item.title.toLowerCase().indexOf(title.toLowerCase()) > -1;
            });
        }

        this.setState({ notes: result });
    }

    render() {
        return (
      <div className="notes-container">
        <AddNote onAddNote={this.onAddNote} />
        <Notes notes={this.props.notes} onDelete={this.onDeleteNote} />
      </div>
        );
    }
}

function mapStatestoProps(state) {
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
