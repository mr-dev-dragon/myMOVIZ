var mongoose = require('mongoose')

var movieSchema = mongoose.Schema({
    movieName: String,
    movieImg: String
})

var movieModel = mongoose.model('movies', movieSchema)

module.exports = movieModel;