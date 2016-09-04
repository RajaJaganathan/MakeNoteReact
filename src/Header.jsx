import React from 'react';
import {Link} from 'react-router';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: '' };
    this.onFilterNote = this.onFilterNote.bind(this);
  }

  onFilterNote(e) {
    this.setState({ filterText: e.target.value });
    this.props.onFilterNote(e.target.value);
  }

  onSortBy(e, field) {
    this.props.onSortBy(field);
  }

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
          <li className="active"><Link to="/">Notes</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/aboutus">About</Link></li>
        </ul>
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" value={this.state.filterText} onChange={this.onFilterNote } className="form-control" placeholder="Search by title"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Sort By <b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li><a onClick={(e) => this.onSortBy(e, 'title') } href="#">Title</a></li>
              <li><a onClick={(e) => this.onSortBy(e, 'savedDate') } href="#">Dates</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>)
  }
}