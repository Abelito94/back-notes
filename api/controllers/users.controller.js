const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getUserById,
  deleteUserById,
  updateUser
}

function getUserById (req, res) {
  const userId = res.locals.user._id
  UserModel
    .findById(userId)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
  const userId = res.locals.user._id
  UserModel
    .remove(userId)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUser (req, res) {
  const userId = res.locals.user._id
  UserModel
    .findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
