const express = require('express');
// creating the router
const movieRouter = express.Router();
const movieController = require('../controllers/movieController');


// get all movies
movieRouter.get('/', movieController.getMovie);

// create new movie
movieRouter.post('/', movieController.createMovie);

// update movie
movieRouter.post('/:id', movieController.updateMovie);

// exporting our post router
module.exports = {
     movieRouter
};