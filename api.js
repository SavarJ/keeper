const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(cors());

const Note = mongoose.model("Note", require("./Note.model"));

app.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json({ data: notes, statusCode: 200 });
  } catch (err) {
    res.json({ data: err.message, statusCode: 500 });
  }
});

app.post("/notes", async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const newNote = new Note({ title, content });
  try {
    await newNote.save();
    res.json({ data: newNote, statusCode: 201 });
  } catch (err) {
    res.json({ data: err.message, statusCode: 500 });
  }
});

app.get("/notes/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const note = await Note.findById(id);
    res.json({ data: note, statusCode: 200 });
  } catch (err) {
    res.json({ data: err.message, statusCode: 500 });
  }
});

app.put("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const content = req.body.content;
  try {
    const note = await Note.findById(id);
    note.title = title;
    note.content = content;
    await note.save();
    res.json({ data: note, statusCode: 200 });
  } catch (err) {
    res.json({ data: err.message, statusCode: 500 });
  }
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const note = await Note.findByIdAndDelete(id);
    res.json({ data: note, statusCode: 200 });
  } catch (err) {
    res.json({ data: err.message, statusCode: 500 });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
