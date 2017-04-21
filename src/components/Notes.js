import React from 'react';
import _ from 'lodash';

import Note from './Note';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return {};
  }

  render() {

    var notes = _.map(this.props.notes, (item, idx) => {
      return <Note key={idx} item={item} onDelete={this.props.onDelete}/>
    });

    return (<div className="note row">
      {notes}
    </div>)
  }
}