const NotesModel = require('../models/notes.model')
const { handleError } = require('../utils')

module.exports = {
  createNote
}

function createNote (req, res) {
  const noteBody = req.body.texto
  NotesModel
    .create(noteBody)
    .then(note => res.json(note))
    .catch((err) => handleError(err, res))
}
