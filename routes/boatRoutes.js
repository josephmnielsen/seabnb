const router = require('express').Router()
const { Boat, User } = require('../models')

// get all boats
router.get('/boats', (req, res) => {
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
router.post('/boats', (req, res) => {
  Boat.create(req.body)
    .then(boat => res.json(boat))
    .catch(err => console.log(err))
})

// update boat
router.put('/boats/:id', (req, res) => {
  Boat.findByIdAndUpdate(req.body)
    .then(boat => res.json(boat))
    .catch(err => console.log(err))
})

// delete boat
router.delete('/boats/:id', (req, res) => {
  Boat.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))

})