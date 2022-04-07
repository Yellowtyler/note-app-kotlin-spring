import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        let date = new Date();
        fetch("http://localhost:8080/api/v1/note/create", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: noteText, creationDate: date.toISOString()})})
        .then(response => {
            handleAddNote(response.json().id, noteText, date);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        window.location.reload();
    }

    return <div className="note new">
        <textarea 
            rows='8'
            cols='10'
            placeholder="Type to add a note..."
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className="note-footer">
            <small>{characterLimit - noteText.length}</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
};

export default AddNote;
