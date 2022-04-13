var express = require("express");
var router = express.Router();

var request = require("sync-request");

var movieModel = require("../models/movies");

var myApiKey = "8087f408100c3de021fda9e650563612";

router.get("/new-movies", function (req, res, next) {
  var data = request(
    "GET",
    `https://api.themoviedb.org/3/discover/movie?api_key=${myApiKey}&language=fr-FR&region=FR&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.lte=2020-01-01`
  );
  var dataParse = JSON.parse(data.body);

  res.json({ result: true, movies: dataParse.results });
});

router.post("/wishlist-movie", async function (req, res, next) {
  var newMovie = new movieModel({
    movieName: req.body.name,
    movieImg: req.body.img,
  });

  var movieSave = await newMovie.save();

  var result = false;
  if (movieSave.movieName) {
    result = true;
  }

  res.json({ result });
});

router.delete("/wishlist-movie/:name", async function (req, res, next) {
  var returnDb = await movieModel.deleteOne({ movieName: req.params.name });

  var result = false;
  if (returnDb.deletedCount == 1) {
    result = true;
  }

  res.json({ result });
});

router.get("/wishlist-movie", async function (req, res, next) {
  var movies = await movieModel.find();

  res.json({ movies });
});

module.exports = router;
