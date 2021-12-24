import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateArea = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            addNote(title, content, uuidv4());
            setTitle("");
            setContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
