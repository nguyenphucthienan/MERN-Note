import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderHeader() {
    switch (this.props.user) {
      case null:
        return <div>Loading...</div>;
      case false:
        return [
          <li key="1"><Link to="/about">About</Link></li>,
          <li key="2"><a href="/api/login/google">Login</a></li>
        ];
      default:
        return [
          <li key="1"><Link to="/notes">My Notes</Link></li>,
          <li key="2"><Link to="/about">About</Link></li>,
          <li key="3"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  renderSideNav() {
    if (this.props.user) {
      return [
        <li key="1"><Link to="/notes">My Notes</Link></li>,
        <li key="2"><Link to="/about">About</Link></li>,
        <li key="3"><a href="/api/logout">Logout</a></li>
      ];
    }

    return [
      <li key="1"><Link to="/about">About</Link></li>,
      <li key="2"><a href="/api/login/google">Login</a></li>
    ];
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="transparent-fixed">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <i className="material-icons">event_note</i>Note
          </Link>

            <a href="#!" data-activates="nav-mobile" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
              {this.renderHeader()}
            </ul>

            <ul className="side-nav" id="nav-mobile">
              {this.renderSideNav()}
            </ul>
          </div>
        </nav >
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Header);
