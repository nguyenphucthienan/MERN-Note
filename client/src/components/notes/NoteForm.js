import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import NoteFieldInput from './NoteFieldInput';
import NoteFieldTextArea from './NoteFieldTextArea';

class NoteForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>

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
          <Link to="/notes" className="btn red darken-2 left">
            Cancel
          </Link>
          <button type="submit" className="btn green darken-1 right">
            Add
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title cannot be blank';
  }

  if (values.title && values.title.length > 150) {
    errors.title = 'Title must be a string with a maximum length of 150 characters';
  }

  if (!values.content) {
    errors.content = 'Content cannot be blank';
  }

  if (values.content && values.content.length < 100) {
    errors.content = 'Content must be at least 50 characters';
  }

  return errors;
}

export default reduxForm({
  form: 'noteForm',
  validate
})(NoteForm);
