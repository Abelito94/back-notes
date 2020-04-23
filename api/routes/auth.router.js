const router = require('express').Router()

const {
  login,
  signup
} = require('../controllers/auth.controller')

router.post('/signup', signup)
router.post('/login', login)

module.exports = router

/*"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZvbzUiLCJlbWFpbCI6ImZvbzVAZm9vNS5jb20iLCJpYXQiOjE1ODc2MzU4OTgsImV4cCI6MTU4ODI0MDY5OH0.OveJ88TD2XRdo3yATeaZkWe3ZvMokcYscGTVe2R7Yo8"*/
