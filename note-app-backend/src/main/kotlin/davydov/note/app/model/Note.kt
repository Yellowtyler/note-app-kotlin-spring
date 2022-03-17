package davydov.note.app.model

import java.time.LocalDateTime
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Note(@Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long,
                val text: String, val creationDate: LocalDateTime)
