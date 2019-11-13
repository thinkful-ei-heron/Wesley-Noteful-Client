import React from 'react'
import Note from '../Note/Note'
import ApiContext from '../ApiContext'
import { findNote, countNotesForFolder } from '../notes-helpers'
import './NotePageMain.css'

export default class NotePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteNote = noteId => {
    this.props.history.push(`/`)
  }

  render() {
    const { notes } = this.context;
    const { note_id } = this.props.match.params;
    const note = findNote(notes, note_id) || {content: ''};
    return (
      <section className='NotePageMain'>
        <Note
          id={note.id}
          name={note.name}
          modified={note.date_added}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className='NotePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}
