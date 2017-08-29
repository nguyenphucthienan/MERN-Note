import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions';

import NoteCard from './NoteCard';

class NoteList extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  renderNotes() {
    if (this.props.notes) {
      return this.props.notes.map(note => (
        <NoteCard
          key={note._id}
          id={note._id}
          title={note.title}
          content={note.content}
        />
      ));
    }

    return (
      <div className="container center-align white-text">
        Loading...
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        {this.renderNotes()}
      </div>
    );
  }
}

function mapStateToProps({ notes }) {
  return { notes };
}

export default connect(mapStateToProps, { fetchNotes })(NoteList);
