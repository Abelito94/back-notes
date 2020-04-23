const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getUserById,
  deleteUserById,
  updateUser,
  getNotesByUser,
  addNotesToUser,
  deleteNoteFromOneUser
}

function getUserById (req, res) {
  UserModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getNotesByUser (req, res) {
  UserModel
    .findById(req.params.id)
    .populate('notes')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
  UserModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUser (req, res) {
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function addNotesToUser (req, res) {
  const note = req.body.note
  UserModel
    .findById(req.params.id)
    .then((user) => {
      user.notes.push(note)
      user
        .save()
        .then((response) => res.json(response))
        .catch((err) => handleError(err))
    })
    .catch((err) => handleError(err))
}

function deleteNoteFromOneUser (req, res) {
  const noteId = req.query.noteid
  UserModel
    .findById(req.params.id)
    .then(user => {
      if (!user) return res.json({ err: 'user not found' })
      user.notes.id(noteId).remove()
      user.save()
        .then(response => res.json(response))
        .catch(err => handleError(err))
    })
    .catch(err => handleError(err))
}