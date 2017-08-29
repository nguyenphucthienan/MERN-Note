import React, { Component } from 'react';

class NoteCard extends Component {
  render() {
    return (
      <div className="col s12 m6">
        <div className="card transparent-background">
          <div className="card-content white-text">
            <span className="card-title">{this.props.title}</span>
            <p>{this.props.content.length > 100 ? `${this.props.content.slice(0, 100)}...` : this.props.content}</p>
          </div>
          <div className="card-action">
            <a href="#!">View</a>
            <a href="#!">Edit</a>
            <a href="#!">Delete</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteCard;
