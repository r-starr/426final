import express from "express";

export const router = express.Router();
const endpoint = "/login";

//GET /home --> renders index.html (in view)
router.get('/', function (req, res) {
    res.render('login/index'); //!URL, goes to "views" folder and picks an html doc
});