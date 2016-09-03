import React from 'react';
import ReactDOM from 'react-dom';

// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Header from './Header.jsx';
import Notes from './Notes.jsx';
import AddNote from './AddNote.jsx';

class MakeNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return {
      notes: [{
        title: 'Personal Todo',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit esse quo facere non illo commodi, dicta ab deserunt aperiam dignissimos, sunt distinctio consequatur rerum libero reiciendis hic sit ipsa asperiores.',
        savedDate: new Date()
      }, {
          title: 'Tech Todo',
          desc: 'Learning React JS',
          savedDate: new Date('02/03/2016')
        },
        {
          title: 'Tour Checklist',
          desc: 'Shoes, Bag, passport, kindle etc...,',
          savedDate: new Date('02/03/2016')
        }]
    };
  }

  render() {
    return <div className="page-wrapper">
      <Header/>
      <div className="container">
        <AddNote/>
        <Notes notes={this.state.notes}/>
      </div>
    </div>;
  }
}

ReactDOM.render(<MakeNote/>, document.getElementById('root'));