import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="note__item">
        <div className="note__last-saved">{this.props.note.savedDate}</div>
        <div className="note__title">{this.props.note.title}</div>
        <div className="note__desc">{this.props.note.desc}</div>
        <div className="notes__delete-icon">
          <span class="glyphicon glyphicon-remove">X</span>
        </div>
      </div>
    );
  }
}