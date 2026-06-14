// controllers/notes.js

let notes = [
  { id: 1, title: "First note", content: "Hello World" },
  { id: 2, title: "Second note", content: "Learning Backend" },
];

let nextId = 3;

const getAllNotes = (req, res) => {
  res.status(200).json(notes);
};

const getNoteById = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID — must be a number" });
  }

  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  res.status(200).json(note);
};

const createNote = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newNote = { id: nextId++, title, content };
  notes.push(newNote);

  res.status(201).json(newNote);
};

const updateNote = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID — must be a number" });
  }

  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  const { title, content } = req.body;

  if (title === undefined && content === undefined) {
    return res
      .status(400)
      .json({ error: "Provide title or content to update" });
  }

  if (title !== undefined) note.title = title;
  if (content !== undefined) note.content = content;

  res.status(200).json(note);
};

const replaceNote = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID — must be a number" });
  }

  const index = notes.findIndex((n) => n.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Note not found" });
  }

  const { title, content } = req.body;

  if (!title || !content) {
    return res
      .status(400)
      .json({ error: "Title and content are both required" });
  }

  notes[index] = { id, title, content };
  res.status(200).json(notes[index]);
};

const deleteNote = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID — must be a number" });
  }

  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }

  notes = notes.filter((n) => n.id !== id);
  res.sendStatus(204);
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  replaceNote,
  deleteNote,
};
