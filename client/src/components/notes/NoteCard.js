import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchNotes } from '../../actions';

class NoteCard extends Component {
  textSlicing(text, maxLength) {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  }

  async deleteNote(id) {
    await axios.delete(`/api/notes/${id}`);
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="col s12 m6">
        <div className="card transparent-background">
          <div className="card-content white-text">
            <span className="card-title">{this.textSlicing(this.props.title, 50)}</span>
            <p>{this.textSlicing(this.props.content, 100)}</p>
          </div>
          <div className="card-action">
            <a href="#!">View</a>
            <a href="#!">Edit</a>
            <a href="#!" onClick={() => this.deleteNote(this.props.id)}>Delete</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchNotes })(NoteCard);
