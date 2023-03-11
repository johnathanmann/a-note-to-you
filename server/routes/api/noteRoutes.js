const router = require("express").Router();
const {
  getAllNotes,
  getNoteById,
  getNoteByUniqId,
  createNote
} = require("../../controllers/noteController");

// /api/notes
router.route("/").get(getAllNotes).post(createNote);
// /api/notes/:noteId
router.route("/:noteId").get(getNoteById);
router.route("/dear/:uniqId").get(getNoteByUniqId);

module.exports = router;
