const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// get all users
router.get('/user', (req, res) => {
  User.find({})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

// get one user
router.get('/user/:id', (req, res) => {
  User.findById(req.params.id)
    .then(boats => res.json(boats))
    .catch(err => console.log(err))
})

//sign in
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})

router.get('/users', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user)
})

// create new user
router.post('/users/register', (req, res) => {
  const { name, email } = req.body
  User.register(new User({name, email}), req.body.password, err => {
    if (err) { console.log(err)}
    res.sendStatus(200)
  })
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

// update user
router.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// delete user
router.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router