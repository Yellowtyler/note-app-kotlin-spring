import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/note/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNotes(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return <div className="container">
    <NoteList notes={notes}></NoteList>
  </div>
};

export default App;