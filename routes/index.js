const router = require('express').Router()

router.use(require('userRoutes.js'))
router.use('/api', require('./boatRoutes.js'))