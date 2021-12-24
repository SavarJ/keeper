import React from "react";

const Note = ({ title, content, deleteNote, id }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={(event) => {
          event.preventDefault();
          deleteNote(id);
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default Note;
