const router = require('express').Router()

const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const { authUser } = require('../utils')

router.use('/auth', authRouter)
router.use('/users', usersRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
