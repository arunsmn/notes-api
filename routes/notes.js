const express = require("express");

const router = express.Router();

const {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  replaceNote,
  deleteNote,
} = require("../controllers/notes");

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", replaceNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;
