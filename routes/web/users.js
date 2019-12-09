import express from "express";

export const router = express.Router();
const endpoint = "/users";

//GET /users --> renders index.html (in view)
router.get('/', function (req, res) {
    res.render('users/index'); //!URL, goes to "views" folder and picks an html doc
});

//GET /users/create --> renders create.html (in view)
router.get('/create', function (req, res) {
    res.render('users/create'); //!URL, goes to "views" folder and picks an html doc
});

//GET /games/edit --> renders edit.html (inview)
router.get('/edit', function (req, res) {
    res.render('users/edit'); //!URL, goes to "views" folder and picks an html doc
});

router.get('/delete', function (req, res) {
    res.render('users/delete'); //!URL, goes to "views" folder and picks an html doc
});