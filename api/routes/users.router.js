const router = require('express').Router()

const {
  getUserById,
  deleteUserById,
  updateUser
} = require('../controllers/users.controller')

router.get('/:id', getUserById)
router.delete('/:id', deleteUserById)
router.put('/:id', updateUser)

module.exports = router
