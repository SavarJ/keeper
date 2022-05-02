import React, { useState, useEffect } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";

const App = () => {
  const getNotes = async () => {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const json = await response.json();
    return json.data;
  };
  const logError = (error) => {
    console.error(error);
  };
  const [notes, setNotes] = useState([
    {
      title: "Notes are loading...",
      content: "Please wait... API is starting up on Heroku",
      _id: "123456",
    },
  ]);
  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  const addNote = async (title, content) => {
    const response = await fetch(process.env.REACT_APP_API_URL, {
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
      getNotes().then(setNotes).catch(logError);
    }
  };
  const deleteNote = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.statusCode === 200) {
      getNotes().then(setNotes).catch(logError);
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
