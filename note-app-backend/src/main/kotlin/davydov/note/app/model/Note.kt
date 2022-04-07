package davydov.note.app.model

import org.springframework.data.annotation.CreatedDate
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "note")
class Note(@Id @GeneratedValue var id: Long? = null,
                var text: String? = null) {
    @CreatedDate
    @Column(updatable = false, nullable = false)
    lateinit var creationDate: LocalDateTime
}
