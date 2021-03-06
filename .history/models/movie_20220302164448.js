
let mongoose = require('mongoose');

// Create a model class
let movieModel = mongoose.Schema(
    {
        Title: String,
        Synopsis: String,
        Year: Number,
        Director: String,
        gGenre: String
    },
    {
        collection: "movies"
    }
);

module.exports = mongoose.model('Movie', movieModel);