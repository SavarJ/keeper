import React, { useState, useEffect } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      const response = await fetch("http://localhost:5000/notes");
      const json = await response.json();
      return json.data;
    };
    getNotes().then(setNotes);
  }, []);

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
      const notes2 = await response2.json();
      if (notes2.statusCode === 200) {
        setNotes(notes2.data);
        console.log(notes);
      } else {
        console.log("error");
      }
    }
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
  };
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note._id}
            title={note.title}
            content={note.content}
            id={note._id}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
