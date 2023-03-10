const router = require("express").Router();
const {
  getAllNotes,
  getNoteById,
  createNote
} = require("../../controllers/noteController");

// /api/notes
router.route("/").get(getAllNotes).post(createNote);
// /api/notes/:noteId
router.route("/:noteId").get(getNoteById);

module.exports = router;
