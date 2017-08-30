import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

import NoteFieldInput from './NoteFieldInput';
import NoteFieldTextArea from './NoteFieldTextArea';

class NoteAdd extends Component {
  componentDidMount() {
    document.title = `${config.appName} – Add New Note`;
  }

  async createNote(values) {
    await axios.post('/api/notes', values);
    this.props.history.push('/notes');
  }

  renderBackButton() {
    return (
      <div className="fixed-action-btn">
        <a
          onClick={() => this.props.history.goBack()}
          className="waves-effect waves-light btn btn-floating btn-large blue darken-2 pulse"
        >
          <i className="material-icons">arrow_back</i>
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="container center-align white-text">
        <h2>Add New Note</h2>
        <div>
          <form onSubmit={this.props.handleSubmit(values => this.createNote(values))}>
            <Field
              type="text"
              name="title"
              label="Title"
              component={NoteFieldInput}
            />
            <Field
              type="text"
              name="content"
              label="Content"
              component={NoteFieldTextArea}
            />
            <button type="submit" className="btn green darken-1 center-align">
              <i className="material-icons left">done</i>Add
            </button>
          </form>
        </div>
        {this.renderBackButton()}
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title cannot be blank';
  }

  if (values.title && values.title.trim().length > 150) {
    errors.title = 'Title must be a string with a maximum length of 150 characters';
  }

  if (!values.content) {
    errors.content = 'Content cannot be blank';
  }

  if (values.content && values.content.trim().length < 10) {
    errors.content = 'Content must be at least 10 characters';
  }

  return errors;
}

export default reduxForm({
  form: 'noteAdd',
  validate
})(withRouter(NoteAdd));
