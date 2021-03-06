import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fetchNotes, fetchNote } from '../../actions';

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
            <span className="card-title note-card-title">{this.textSlicing(this.props.title, 20)}</span>
            <p className="note-card-content">{this.textSlicing(this.props.content, 100)}</p>
          </div>
          <div className="card-action">
            <Link to={`/notes/${this.props.id}`}>View</Link>
            <Link to={`/notes/${this.props.id}/edit`} onClick={() => this.props.fetchNote(this.props.id)}>Edit</Link>
            <a
              onClick={() => this.deleteNote(this.props.id)}
              className="pointer-cursor"
            >
              Delete
            </a>
          </div>
        </div>
      </div >
    );
  }
}

export default connect(null, { fetchNotes, fetchNote })(NoteCard);
