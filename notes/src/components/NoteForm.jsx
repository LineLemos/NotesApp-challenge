import { useState } from "react";
import styles from '../styles/Note.module.css'

const NoteForm = ({ addNote }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addNote(value);
    setValue("");
  };

  return (
    <div className={styles.noteForm}>
      <h2>Criar Nota:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite aqui"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Criar Nota</button>
      </form>
    </div>
  );
};

export default NoteForm;
