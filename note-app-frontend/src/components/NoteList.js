import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({ notes, handleAddNote }) => {
    return <div className="note-list">
        {notes.map(note => 
            <Note id={note.id} text={note.text} date={note.creationDate}/>
        )}
        <AddNote handleAddNote={handleAddNote}/>
    </div>;
};

export default NoteList;
