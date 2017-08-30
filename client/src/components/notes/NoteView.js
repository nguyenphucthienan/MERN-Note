import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
                <p className="flow-text">{this.state.content}</p>
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

export default withRouter(NoteView);
