import { useState, useEffect } from "react";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import Search from './components/Search';

const App = () => {

  const [notes, setNotes] = useState([]);
  const [error, setError] = useState()

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/note/")
      .then(res => res.json())
      .then(
        (result) => {
          setNotes(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (id, text, date) => {
      const newNote = {
          id: id,
          text: text,
          date: date.toLocaleTimeString('en-US')
      };
      setNotes(...notes, newNote);
  };

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote}></NoteList>
      </div>
    </div>
  );
  
};

export default App;