const express = require('express')
const router = express.Router()
const getMovies = require('../controllers/movieAccess')

router.get('/', async (req, res) => {
	res.send(getMovies)
})

module.exports = router