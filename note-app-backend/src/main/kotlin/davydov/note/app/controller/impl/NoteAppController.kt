package davydov.note.app.controller.impl

import davydov.note.app.controller.NoteAppApi
import davydov.note.app.model.Note
import davydov.note.app.model.NoteUpdateDto
import davydov.note.app.service.NoteService
import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.*
import java.time.LocalDateTime

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/note")
class NoteAppController(val noteService: NoteService): NoteAppApi {

    @GetMapping("/")
    override fun getAllNotes(): List<Note> {
        println(LocalDateTime.now())
        return noteService.getAllNotes()
    }

    @PostMapping("/create")
    override fun addNewNote(request: Note): Note {
        return noteService.addNewNote(request)
    }

    @DeleteMapping("/{id}")
    override fun deleteNote(@PathVariable id: Long) {
        return noteService.deleteNote(id)
    }

    @PostMapping("/edit")
    override fun editNote(request: NoteUpdateDto) {
        return noteService.editNote(request)
    }

}