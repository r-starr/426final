import express from "express";

export const router = express.Router();

var gamesC = require('../../controllers/gameC');


router.get('/', function (req, res) {
    let gc = new gamesC();
    res.json(gc.index());
});


router.get('/:game_id', function (req, res) {
    let gc = new gamesC();
    res.json(gc.show(req.params));
});

router.post('/', function (req, res) {
    //store()
});

router.put('/:game_id', function (req, res) {
    //update()
});

router.delete('/:game_id', function (req, res) {
    //destroy()
});