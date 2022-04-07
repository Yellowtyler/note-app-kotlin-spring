package davydov.note.app.service.impl

import davydov.note.app.model.Note
import davydov.note.app.model.NoteUpdateDto
import davydov.note.app.repository.NoteAppRepository
import davydov.note.app.service.NoteService
import lombok.RequiredArgsConstructor
import org.springframework.stereotype.Service

@Service
@RequiredArgsConstructor
class NoteServiceImpl(private val noteAppRepository: NoteAppRepository) : NoteService {

    override fun getAllNotes(): List<Note> {
        return noteAppRepository.findAll().iterator().asSequence().toList()
    }

    override fun addNewNote(note: Note): Note {
        return noteAppRepository.save(note)
    }

    override fun deleteNote(id: Long) {
        noteAppRepository.deleteById(id)
    }

    override fun editNote(note: NoteUpdateDto) {
        return noteAppRepository.updateNote(note.id, note.text.orEmpty())
    }
}