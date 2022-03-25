import { useState } from "react";

const AddNote = () => {
    const [noteText, setNoteText] = useState('')
    
    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        fetch("http://localhost:8080/api/v1/note/create", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: noteText, creationDate: Date.now().toLocaleString()})})
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
          })
        .catch((error) => {
            console.error('Error:', error);
        });
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
            <small>200 Remaining</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
};

export default AddNote;
