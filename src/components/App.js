import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as notesAction from '../actions/noteActions';

import Header from '../layout/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.onFilterNote = this.onFilterNote.bind(this);
    this.onSortBy = this.onSortBy.bind(this);
    this.originalNotes = [];
    this.sortParams = {
      dir: 'asc',
      field: ''
    };
  }

  componentDidMount() {
    this.props.actions.loadNotes();
  }

  onFilterNote(title) {
    this.props.actions.filterNotesByTitle(title);
  }

  onSortBy(field) {
    if (this.sortParams.field === field) {
      this.sortParams.dir = this.sortParams.dir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortParams.dir = 'asc';
    }
    this.sortParams.field = field;
    this.props.actions.orderByTitle(this.sortParams.dir);
  }
  render() {
    return (
      <div className="page-wrapper">
        <Header onFilterNote={this.onFilterNote} onSortBy={this.onSortBy}/>
        <div className="container">
          {this.props.children}
        </div>
      </div>);
  }
}

function filterNotes(notes) {
  return _.filter(notes, (item, idx) => {
    return item.title.toLowerCase().indexOf('todo') > -1;
  });
}

function mapStatestoProps(state, ownProps) {
  return {
    notes: filterNotes(state.notes)
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(notesAction, dispatch)
  };
}

export default connect(mapStatestoProps, mapDispatchtoProps)(App);