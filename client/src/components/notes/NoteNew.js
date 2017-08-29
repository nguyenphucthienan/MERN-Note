import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import NoteForm from './NoteForm';

class NoteNew extends Component {
  async createNote(values) {
    await axios.post('/api/notes', values);
    this.props.history.push('/notes');
  }

  render() {
    return (
      <div className="container center-align white-text">
        <h2>Add New Note</h2>
        <NoteForm onSubmit={values => this.createNote(values)} />
      </div>
    );
  }
}

export default withRouter(NoteNew);
