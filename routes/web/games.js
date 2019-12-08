import express from "express";

export const router = express.Router();
const endpoint = "/games";

//GET /games --> renders index.html (in view)
router.get('/', function (req, res) {
    res.render('games/index'); //!URL, goes to "views" folder and picks an html doc
});

//GET /games/create --> renders create.html (in view)
router.get('/create', function (req, res) {
    res.render('games/create'); //!URL, goes to "views" folder and picks an html doc
});

//GET /games/edit --> renders edit.html (inview)
router.get('/edit', function (req, res) {
    res.render('games/edit'); //!URL, goes to "views" folder and picks an html doc
});
