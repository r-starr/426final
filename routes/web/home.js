import express from "express";

export const router = express.Router();
const endpoint = "/home";

//GET /home --> renders index.html (in view)
router.get('/', function (req, res) {
    res.render('home/index'); //!URL, goes to "views" folder and picks an html doc
});