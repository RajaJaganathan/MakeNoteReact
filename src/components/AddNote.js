import React from 'react';

export default class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.state = {
      title: '',
      desc: ''
    };
  }

  onAddNoteHandler() {    
    var newNote = Object.assign({ savedDate: new Date() }, this.state);
    this.props.onAddNote(newNote);
    this.setState({ title: '', desc: '' });
  }

  onInputChangeHandler(e, type) {
    this.setState({[type]:e.target.value});
  }

  render() {
    return (
      <div className="form-group addnote row">
        <div className="addnote__field">
          <div className="col-xs-3">
            <input type="text" value={this.state.title}  onChange={(e) => this.onInputChangeHandler(e, 'title') }  placeholder="Note Title" className="form-control col-xs-3"/>
          </div>
          <div className="col-xs-7">
            <input type="text" value={this.state.desc}  onChange={(e) => this.onInputChangeHandler(e, 'desc') } placeholder="Description of Note" className="form-control"/>
          </div>
        </div>
        <div className="addnote__button col-xs-2">
          <button onClick={this.onAddNoteHandler} className="btn btn-primary">Add Note</button>
        </div>
      </div>
    );
  }
}