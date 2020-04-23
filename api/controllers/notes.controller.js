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
    .find()
		.then(notes => res.json(notes.filter(note => console.log(note.user[0]) == console.log(userId))))
    .catch((err) => handleError(err))
}

function createNote (req, res) {
  const userId = res.locals.user._id
  const noteBody = req.body
  NotesModel
    .create(noteBody)
    .then(note => {
      note.user.push(userId)
      note
        .save()
        .then((response) => res.json(response))
        .catch((err) => handleError(err));
    })
    .catch((err) => handleError(err, res))
}

function getUserNote (req, res) {
  NotesModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
function updateNote (req, res) {
  NotesModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteNote (req, res) {
  NotesModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
