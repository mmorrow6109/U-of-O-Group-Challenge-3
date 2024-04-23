const express = require('express');
const router = express.Router();
const { Favorite } = require("../../models/Favorite");
const { auth } = require("../../utils/auth");

// Route to get the number of users who have favorited a specific movie
router.post("/favoriteNumber", (req, res) => {
    Favorite.find({ "movieId": req.body.movieId })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, favoriteNumber: favorites.length });
        });
});

// Route to check if a movie is favorited by a specific user
router.post("/favorited", (req, res) => {
    Favorite.find({ "movieId": req.body.movieId, "userFrom": req.body.userFrom })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err);
            let isFavorited = favorites.length > 0;
            res.status(200).json({ success: true, favorited: isFavorited });
        });
});

// Route to add a movie to a user's favorites list
router.post("/addToFavorite", (req, res) => {
    const favorite = new Favorite(req.body);
    favorite.save((err) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true });
    });
});

// Route to remove a movie from a user's favorites list
router.post("/removeFromFavorite", (req, res) => {
    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true, doc });
        });
});

// Route to retrieve all favorited movies for a specific user
router.post("/getFavoredMovies", (req, res) => {
    Favorite.find({ 'userFrom': req.body.userFrom })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json({ success: true, favorites });
        });
});

module.exports = router;
