// create a reference to the model
let Movie = require('../models/movie');

// Gets all movies from the Database and renders the page to list all movies.
module.exports.movieList = function(req, res, next) {  
    Movie.find((err, movieList) => {
        // console.log(movieList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('movie/list', {
                title: 'Movie List', 
                movies: movieList
            })            
        }
    });
}

// Gets a movie by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    Movie.findById(id, (err, movieToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('movie/details', {
                title: 'Movie Details', 
                movie: movieToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    // ADD YOUR CODE HERE        
    let newMovie = Movie();

    res.render('movie/add_edit', {
        title: 'Add a new Movie',
        movie: newMovie
    
    })   

}

// Processes the data submitted from the Add form to create a new movie
//Pay attention to details, it wasn't running because of the lowercase
module.exports.processAddPage = (req, res, next) => {
    // ADD YOUR CODE HERE
    let newMovie = Movie({
        _id: req.body.id,
        Title: req.body.Title,
        Synopsis: req.body.Synopsis,
        Year: req.body.Year,
        Director: req.body.Director,
        Genre: req.body.Genre

});
    Movie.create(newMovie, (err, movie) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(movie);
            res.redirect('/movie/list');
        }
});
}

// Gets a movie by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    // ADD YOUR CODE HERE
    let id = req.params.id;

    Movie.findById(id, (err, movieToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('movie/add_edit', {
                title: 'Edit Movie Entry', 
                movie: movieToEdit,
                userName: req.user ? req.user.username : '' 
            })
        }
    });

}

// Processes the data submitted from the Edit form to update a movie
module.exports.processEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    
}

// Deletes a movie based on its id.
module.exports.performDelete = (req, res, next) => {
    
    // ADD YOUR CODE HERE

}