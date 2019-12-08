import express from "express";

export const router = express.Router();


router.get('/', function (req, res) {
    //show all
});

router.get('/create', function (req, res) {
    res.render('games/create');
});

router.get('/edit', function (req, res) {
    //edit()
});
