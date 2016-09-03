import React from 'react';
import ReactDOM from 'react-dom';

// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Header from './Header.jsx';

class MakeNote extends React.Component {
  render() {
    return <div className="page-wrapper">
      <Header/>
      <div className="container">
        
      </div>
    </div>;
  }
}

ReactDOM.render(<MakeNote/>, document.getElementById('root'));