import React from 'react';
import _ from 'lodash';
import moment from 'moment';

import Note from './Note.jsx';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getInitialState();
    this.onDelete = this.onDelete.bind(this);
  }

  _getInitialState() {
    return {};
  }

  onDelete(note) {
    var notes = _.remove(this.state.notes, note);
    this.setState({ notes: this.state.notes });
  }

  render() {
    var notes = _.map(this.props.notes, (item, idx) => {
      return (
        <div key = { idx } className="note__item">
          <div onClick={() => this.onDelete(item) } className="notes__delete-icon">
            <span className="glyphicon glyphicon-remove"></span>
          </div>
          <div className="note__title">{item.title}
            <div className="note__last-saved col-xs-6 pull-right text-right">{moment(item.savedDate).format('LL') }</div>
          </div>
          <div className="note__body">
            <div className="note__desc">{item.desc}</div>
          </div>
        </div>
      )
    });

    return (<div className="note row">
      {notes}
    </div>)
  }
}