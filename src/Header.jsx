import React from 'react';

export default class Header extends React.Component {
  render() {
    return (<nav className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Make Note</a>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Notes</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search by title"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        <ul className="nav navbar-nav navbar-right">          
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Sort By <b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li><a href="#">Title</a></li>
              <li><a href="#">Dates</a></li>             
            </ul>
          </li>
        </ul>
      </div>
    </nav>)  
  }
}