import express from "express";

export const router = express.Router();
const endpoint = "/reviews";

//GET /games --> renders index.html (in view)
router.get('/', function (req, res) {
    res.render('reviews/index'); //!URL, goes to "views" folder and picks an html doc
});

//GET /games/create --> renders create.html (in view)
router.get('/create', function (req, res) {
    res.render('reviews/create'); //!URL, goes to "views" folder and picks an html doc
});

//GET /games/edit --> renders edit.html (inview)
router.get('/edit', function (req, res) {
    res.render('reviews/edit'); //!URL, goes to "views" folder and picks an html doc
});

router.get('/delete', function (req, res) {
    res.render('reviews/delete'); //!URL, goes to "views" folder and picks an html doc
});