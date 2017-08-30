import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import config from '../config';

class Landing extends Component {
  componentDidMount() {
    document.title = `${config.appName}`;
  }

  renderMainButton() {
    if (this.props.user) {
      return (
        <Link
          key="1"
          to="/notes"
          className="waves-effect waves-light btn green darken-1"
        >
          <i className="material-icons left">arrow_forward</i>View my Notes
        </Link>
      );
    }

    return (
      <a
        href="/api/login/google"
        className="waves-effect waves-light btn red darken-2"
      >
        <i className="material-icons left">person_outline</i>Login with Google
      </a>
    );
  }

  render() {
    return (
      <div className="container center-align white-text">
        <h2>MERN Note</h2>
        <p className="flow-text">Keep your notes and share them with other people</p>
        {this.renderMainButton()}
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Landing);
