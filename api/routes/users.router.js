const router = require('express').Router()

const {
  getUserById,
  getNotesByUser,
  deleteUserById,
  updateUser,
  addNotesToUser,
  deleteNoteFromOneUser
} = require('../controllers/users.controller')

router.get('/:id', getUserById)
router.get('/:id/notes', getNotesByUser)
router.delete('/:id', deleteUserById)
router.put('/:id', updateUser)
router.post('/:id', addNotesToUser)
router.delete('/:id/notes', deleteNoteFromOneUser)

module.exports = router
