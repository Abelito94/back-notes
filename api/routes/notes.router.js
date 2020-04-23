const router = require('express').Router()

const {
  createNote
} = require('../controllers/notes.controller')

router.post('/', createNote)

module.exports = router
