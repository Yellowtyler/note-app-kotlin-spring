package davydov.note.app.repository

import davydov.note.app.model.Note
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface NoteAppRepository: CrudRepository<Note, Long> {
    @Query("update Note n set n.text = :text where n.id = :id")
    fun updateNote(@Param("id") id: Long, @Param("text") text: String)
}