package davydov.note.app.controller

import davydov.note.app.model.Note
import davydov.note.app.model.NoteUpdateDto

interface NoteAppApi {
    fun getAllNotes(): List<Note>
    fun addNewNote(request: Note): Note
    fun deleteNote(id: Long)
    fun editNote(request: NoteUpdateDto)
}