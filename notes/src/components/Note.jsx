import React, { useState } from "react";
import styles from "../styles/Note.module.css";

const Note = ({ note, removeNote, updateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateNote(note.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="note">
      <div className="content">
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <p>{note.text}</p>
        )}
      </div>
      <div className={styles.noteForm}>
        {isEditing ? (
          <button className="save" onClick={handleSaveClick}>
            Salvar
          </button>
        ) : (
          <button className="edit" onClick={handleEditClick}>
            Editar
          </button>
        )}
        <button className="remove" onClick={() => removeNote(note.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Note;
