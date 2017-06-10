import React, { Component } from "react";
import { Link, IndexLink } from "react-router";

export default class Header extends Component {
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

  _renderSearchForm() {
    return (
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group filter-field">
          <input
            type="text"
            value={this.state.filterText}
            onChange={this.onFilterNote}
            className="form-control"
            placeholder="Search by title"
          />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }

  _renderSortBy() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            Sort By <b className="caret" />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a onClick={e => this.onSortBy(e, "title")} href="#">Title</a>
            </li>
            <li>
              <a onClick={e => this.onSortBy(e, "savedDate")} href="#">Dates</a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }

  _renderNavbar() {
    return (
      <ul className="nav navbar-nav">
        <li className={location.pathname === "/" && "active"}>
          <IndexLink to="/" activeClassName="active">Notes</IndexLink>
        </li>
        <li className={location.pathname.startsWith("/contact") && "active"}>
          <Link to="/contact" activeClassName="active">Contact</Link>
        </li>
        <li className={location.pathname.startsWith("/aboutus") && "active"}>
          <Link to="/aboutus" activeClassName="active">About</Link>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            <IndexLink to="/" activeClassName="active">Make Note</IndexLink>
          </a>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
              {this._renderNavbar()}
              {this._renderSearchForm()}
              {this._renderSortBy()}
        </div>
      </nav>
    );
  }
}
