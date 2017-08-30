import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

class NoteView extends Component {
  async componentDidMount() {
    document.title = `${config.appName} – Note`;

    try {
      const res = await axios.get(`/api/notes/${this.props.match.params.id}`);

      if (res.data) {
        this.setState(res.data);
      } else {
        this.props.history.push('/404');
      }
    } catch (err) {
      this.props.history.push('/404');
    }
  }

  renderBackButton() {
    if (this.props.user) {
      return (
        <div className="fixed-action-btn">
          <Link
            to="/notes"
            className="waves-effect waves-light btn btn-floating btn-large blue darken-2 pulse"
          >
            <i className="material-icons">arrow_back</i>
          </Link>
        </div>
      );
    }

    return null;
  }

  render() {
    if (this.state) {
      return (
        <div className="container center-align white-text">
          <h2>Note</h2>
          <div className="row left-align white-text">
            <div className="card transparent-background">
              <div className="card-content white-text">
                <h5 className="card-title note-view-title">
                  {this.state.title}
                </h5>
                <p className="flow-text note-view-content">{this.state.content}</p>
              </div>
            </div>
            <div className="card transparent-background">
              <div className="card-content white-text">
                <span className="flow-text">Info:</span>
                <p>
                  Create at: {new Date(this.state.createAt).toLocaleString()}
                </p>
                {this.state.lastUpdate ?
                  <p>
                    Last update: {new Date(this.state.lastUpdate).toLocaleString()}
                  </p> : ''}
              </div>
            </div>
            <div className="card transparent-background">
              <div className="card-content white-text">
                <span className="flow-text">Link:</span>
                <input type="text" name="link" value={`${config.baseURL}${this.props.location.pathname}`} readOnly />
              </div>
            </div>
          </div>
          {this.renderBackButton()}
        </div>
      );
    }

    return (
      <div className="container center-align white-text">
        <p className="text-flow">Loading...</p>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(withRouter(NoteView));
