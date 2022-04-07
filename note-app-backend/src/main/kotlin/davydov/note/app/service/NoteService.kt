package davydov.note.app.service

import davydov.note.app.model.Note
import davydov.note.app.model.NoteUpdateDto

interface NoteService {
    fun getAllNotes(): List<Note>
    fun addNewNote(note: Note): Note
    fun deleteNote(id: Long)
    fun editNote(note: NoteUpdateDto)
}