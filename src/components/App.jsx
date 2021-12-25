import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";
import { v4 as uuidv4 } from "uuid";

const startingNote = {
  title: "Welcome to your notes app!",
  content: "Click on the + button to add a note",
  id: uuidv4(),
};
const App = () => {
  const [notes, setNotes] = useState([startingNote]);
  const addNote = (title, content, id) => {
    setNotes((prevNotes) => {
      return [...prevNotes, { title, content, id }];
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  };
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            title={note.title}
            content={note.content}
            id={note.id}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
