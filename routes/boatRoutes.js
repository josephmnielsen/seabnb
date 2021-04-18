const router = require('express').Router()
const { Boat, User } = require('../models')
const passport = require('passport')

// get all boats
router.get('/boats', passport.authenticate('jwt'), (req, res) => {
  Boat.find({})
    .then(boats => res.json(boats))
    .catch(err => console.log(err))
})

// get one boat
router.get('/boats/:id', (req, res) => {
  Boat.findById(req.params.id)
    .then(boat => res.json(boat))
    .catch(err => console.log(err))
})

// create new boat
router.post('/boats', passport.authenticate('jwt'), (req, res) => {
  Boat.create({
    name: req.body.name,
    boatType: req.body.type,
    size: req.body.size,
    sleeps: req.body.sleeps,
    description: req.body.description,
    location: req.body.location,
    owner: req.user._id
  })
    .then(boat => {
      User.findByIdAndUpdate(req.user._id, { $push: {boats: boat._id } })
      .then(() => res.json(boat))
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

// update boat
router.put('/boats/:id', (req, res) => {
  Boat.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// delete boat
router.delete('/boats/:id', (req, res) => {
  Boat.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))

})

module.exports = router