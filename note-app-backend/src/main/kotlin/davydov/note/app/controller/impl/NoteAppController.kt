package davydov.note.app.controller.impl

import davydov.note.app.controller.NoteAppApi
import davydov.note.app.model.Note
import davydov.note.app.model.NoteUpdateDto
import davydov.note.app.service.NoteService
import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.*

@CrossOrigin(value = ["http://localhost:3000"])
@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/note")
class NoteAppController(val noteService: NoteService): NoteAppApi {

    @GetMapping("/")
    override fun getAllNotes(): List<Note> {
        return noteService.getAllNotes()
    }

    @ResponseBody
    @PostMapping("/create")
    override fun addNewNote(@RequestBody request: Note): Note {
        return noteService.addNewNote(request)
    }

    @DeleteMapping("/delete/{id}")
    override fun deleteNote(@PathVariable id: Long) {
        return noteService.deleteNote(id)
    }

    @PostMapping("/edit")
    override fun editNote(@RequestBody request: NoteUpdateDto) {
        return noteService.editNote(request)
    }

}