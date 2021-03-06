
let mongoose = require('mongoose');

// Create a model class
let movieModel = mongoose.Schema(
    {
        title: String,
        synopsis: String,
        Year: Number,
        Director: String,
        Genre: String
    },
    {
        collection: "movies"
    }
);

module.exports = mongoose.model('Movie', movieModel);