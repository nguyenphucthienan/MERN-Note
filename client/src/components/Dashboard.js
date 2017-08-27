import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="container center-align white-text">
        <h2>My Notes</h2>

        <div className="fixed-action-btn">
          <Link
            to="/notes/new"
            className="waves-effect waves-light btn btn-floating btn-large red darken-2 pulse"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect()(Dashboard);
