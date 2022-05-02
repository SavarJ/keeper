import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ title, content, deleteNote, id }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={async (event) => {
          event.preventDefault();
          deleteNote(id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
