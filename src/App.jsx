import axios from "axios";
import { useEffect, useState } from "react";
import Note from "./components/Note";
import AppBar from "./components/AppBar";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Só roda UMA VEZ, quando o componente monta
    axios
      .get("http://localhost:8000/api/notes/")
      .then((res) => setNotes(res.data));
  }, []); // [] → roda uma vez só

  console.log(notes);

  return (
    <>
      <AppBar />
      
      {notes.map((note) => (
        <Note key={`note__${note.id}`} title={note.title}>
          {note.content}
        </Note>
      ))}
    </>
  );
}

export default App;