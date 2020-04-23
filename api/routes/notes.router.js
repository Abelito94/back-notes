const router = require('express').Router()

const {
  getAllUserNotes,
  createNote,
  getUserNote,
  updateNote,
  deleteNote
} = require('../controllers/notes.controller')

router.get('/', getAllUserNotes)
router.post('/', createNote)
router.get('/:noteId', getUserNote)
router.put('/:noteId', updateNote)
router.delete('/:noteId', deleteNote)

module.exports = router
