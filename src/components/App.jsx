import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note title={note.title} content={note.content} key={note.key} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
