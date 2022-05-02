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
  const addNote = async (title, content) => {
    const response = await fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    const data = await response.json();
    if (data.statusCode === 201) {
      const response2 = await fetch("http://localhost:5000/notes");
      const notes = await response2.json();
      if (notes.statusCode === 200) {
        setNotes(notes.data);
      } else {
        console.log("error");
      }
    }
    // setNotes((prevNotes) => {
    //   return [...prevNotes, { title, content, id }];
    // });
  };
  const deleteNote = async (id) => {
    const response = await fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.statusCode === 200) {
      const response2 = await fetch("http://localhost:5000/notes");
      const notes = await response2.json();
      if (notes.statusCode === 200) {
        setNotes(notes.data);
      } else {
        console.log("error");
      }
    }
    // setNotes((prevNotes) => {
    //   return prevNotes.filter((note) => note.id !== id);
    // });
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
