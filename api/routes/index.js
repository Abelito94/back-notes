const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const notesRouter = require('./notes.router')
const { authUser } = require('../utils')

router.use('/auth', authRouter)
router.use('/users', authUser, usersRouter)
router.use('/me/notes', authUser, notesRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
