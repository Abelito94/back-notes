const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
  texto: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  createdAt: {
    type: Number,
    default: Date.now()
  }
})

const noteModel = mongoose.model('note', notesSchema)
module.exports = noteModel
