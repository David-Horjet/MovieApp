const {
     Movies
} = require('../models/Movie');

// Get All Movies
const getMovie = async (req, res) => {
     try {
          const movies = await Movies.find()
          res.json(movies);
     } catch (error) {
          res.status(500).json(error);
     }
}

// Create Movie
const createMovie = async (req, res) => {
     try {
          const newPost = new Movies(req.body);
          const savedPost = newPost.save(function () {});
          res.status(200).json(savedPost);
     } catch (error) {
          res.status(500).json(error);
     }
};

// Update Movie
const updateMovie = async (req, res) => {

     if (req.body.id === req.params.id) {
          try {
               const movie = await Movies.findById(req.params.id);
               console.log(movie);
               const updatedMovie = await Movies.findByIdAndUpdate(req.params.id, req.body)
               res.json({
                    status: true,
                    message: "Movie Update Successful"
               })
          } catch (error) {
               res.status(500).json(error)
          }
     } else {
          res.json({
               status: false,
               error: "I guess You lost your way itterating through the Ids"
          })
     }

}


module.exports = {
     getMovie,
     createMovie,
     updateMovie
}