import { useState, useEffect } from "react";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";
import styles from "./styles/Note.module.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes)); 
    }
  }, []);

  const updateNotes = (newNotes) => {
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes)); 
  };

  const addNote = (text) => {
    const newNote = {
      id: Math.floor(Math.random() * 1000),
      text,
      isCompleted: false,
    };
    const newNotes = [...notes, newNote];
    updateNotes(newNotes); 
  };

  const removeNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    updateNotes(newNotes); }

  const updateNote = (id, newText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    updateNotes(updatedNotes); 
  };
  return (
    <div className={styles.app}>
      <h1 className={styles.h1}>notesApp</h1>
      <div className={styles.addNote}>
        <NoteForm addNote={addNote} />
      </div>
      <div className={styles.noteList}>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            removeNote={removeNote}
            updateNote={updateNote}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
