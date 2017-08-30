import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import config from '../config';

import NoteList from './notes/NoteList';

class Dashboard extends Component {
  componentDidMount() {
    document.title = `${config.appName} – My Notes`;
  }

  renderAddButton() {
    return (
      <div className="fixed-action-btn">
        <Link
          to="/notes/new"
          className="waves-effect waves-light btn btn-floating btn-large red darken-2 pulse"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="container center-align white-text">
        <h2>My Notes</h2>
        <NoteList />
        {this.renderAddButton()}
      </div>
    );
  }
}

export default connect()(Dashboard);
