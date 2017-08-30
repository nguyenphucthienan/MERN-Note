import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import { fetchNote, resetNote } from '../../actions';

import NoteFieldInput from './NoteFieldInput';
import NoteFieldTextArea from './NoteFieldTextArea';

class NoteEditForm extends Component {
  componentDidMount() {
    document.title = `${config.appName} – Edit Note`;
    this.props.fetchNote(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.resetNote();
  }

  async updateNote(values) {
    await axios.put(`/api/notes/${this.props.match.params.id}`, values);
    this.props.history.push('/notes');
  }

  render() {
    return (
      <div className="container center-align white-text">
        <div>
          <form onSubmit={this.props.handleSubmit(values => this.updateNote(values))}>
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
              <i className="material-icons right">update</i>Update
            </button>
          </form>
        </div>
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

  if (values.content && values.content.length < 10) {
    errors.content = 'Content must be at least 10 characters';
  }

  return errors;
}

function mapStateToProps({ note }) {
  return { initialValues: note };
}

export default connect(mapStateToProps, { fetchNote, resetNote })(reduxForm({
  form: 'noteEdit',
  validate
  // enableReinitialize: true
})(withRouter(NoteEditForm)));
