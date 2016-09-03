import React from 'react';

export default class AddNote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-group addnote row">
        <div className="addnote__field">
          <div className="col-xs-3">
            <input type="text" placeholder="Note Title" className="form-control col-xs-3"/>
          </div>
          <div className="col-xs-7">
            <input type="text" placeholder="Description of Note" className="form-control"/>
          </div>
        </div>
        <div className="addnote__button col-xs-2">
          <button className="btn btn-primary">Add Note</button>
        </div>
      </div>
    );
  }
}