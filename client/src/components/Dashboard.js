import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className="container center-align white-text">
        <h2>My Notes</h2>
      </div>
    );
  }
}

export default connect()(Dashboard);
