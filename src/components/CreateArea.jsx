import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          onClick={() => {
            setIsExpanded(true);
          }}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              event.preventDefault();
              addNote(title, content, uuidv4());
              setTitle("");
              setContent("");
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
