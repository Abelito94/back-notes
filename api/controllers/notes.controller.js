const NotesModel = require('../models/notes.model')
const { handleError } = require('../utils')

module.exports = {
  getAllUserNotes,
  createNote,
  getUserNote,
  updateNote,
  deleteNote
}

function getAllUserNotes (req, res) {
  const userId = res.locals.user._id
  NotesModel
    .find({ user: userId })
    .then(notes => res.json(notes))
    .catch((err) => handleError(err))
}

function createNote (req, res) {
  const noteBody = { user: res.locals.user, ...req.body }
  NotesModel
    .create(noteBody)
    .then((response) => res.json(response))
    .catch((err) => handleError(err))
}

function getUserNote (req, res) {
  NotesModel
    .findById(req.params.noteId)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
function updateNote (req, res) {
  NotesModel
    .findByIdAndUpdate(req.params.noteId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteNote (req, res) {
  NotesModel
    .findByIdAndDelete({ _id: req.params.noteId })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
