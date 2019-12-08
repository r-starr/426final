import express from "express";

export const router = express.Router();
const endpoint = '/api/games';

var gameC = require('../../controllers/gameC');

//GET /api/games index()
router.get('/', function (req, res) {
    res.json(gameC.index());
});

//GET /api/games/:game_id show()
router.get('/:game_id', function (req, res) {
    res.json(gameC.show(req.params));
});

// POST /api/games store()
router.post('/', function (req, res) {
    res.json(gameC.store(req.body));
});

//PUT /api/games/:game_id update()
router.put('/:game_id', function (req, res) {
    res.json(gameC.update(req.body, req.params));
});

//DELETE /api/games/:game_id destroy()
router.delete('/:game_id', function (req, res) {
});