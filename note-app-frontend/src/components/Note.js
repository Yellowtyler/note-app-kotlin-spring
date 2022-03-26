import {MdDeleteForever} from 'react-icons/md';

const Note = ({ id, text, date }) => {

    const insertDate = () => {
        let creationDate = new Date(date)
        if (Math.abs(Date.now() - creationDate)/(1000*24*3600) > 1) {
            return formatDate(date);
        } else {
            return creationDate.toLocaleTimeString('en-US');
        }
    };

    const deleteNote = (event) => {
        fetch('http://localhost:8080/api/v1/note/delete/' + id, {
            method: "DELETE",
            headers: {'Content-type': 'application/json'}
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        window.location.reload();
    };

    return <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{insertDate()}</small>
            <MdDeleteForever className='delete-icon' size="1.3em" onClick={deleteNote}></MdDeleteForever>
        </div>
    </div>;
};


function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export default Note;