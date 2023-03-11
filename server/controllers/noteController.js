const Note = require("../models/Note");

async function getAllNotes(req, res) {
  try {
    const allNotes = await Note.find()
    res.status(200).json(allNotes);
  }catch (err) {
    console.error(err);
  }
}

async function getNoteById(req, res) {
  try{
    const singleNote = await Note.findById(req.params.noteId)
    res.status(200).json(singleNote)
  } catch (err){
    console.error(err)
  }
}

async function getNoteByUniqId(req, res) {
  try{
    const singleNote = await Note.findOne({"uniqId": req.params.uniqId})
    res.status(200).json(singleNote)
  } catch (err){
    console.error(err)
  }
}

async function createNote(req, res) {
  try{
    const newNote = await Note.create(req.body)
    res.status(200).json(newNote)
  } catch (err){
    console.error(err)
  }
}

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  getNoteByUniqId
};
