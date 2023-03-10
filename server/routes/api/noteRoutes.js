const router = require("express").Router();
const {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
} = require("../../controllers/noteController");

// /api/notes
router.route("/").get(getAllNotes).post(createNote);
// /api/notes/:noteId
router.route("/:noteId").get(getNoteById).put(updateNote).delete(deleteNote);

module.exports = router;
