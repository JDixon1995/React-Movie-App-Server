const axios = require('axios')

const getMovies = async () => {
	const res = axios.get('http://www.omdbapi.com/?apikey=927281a6&s')
    const data = await res.data
	console.log(data)
}

module.exports = getMovies()