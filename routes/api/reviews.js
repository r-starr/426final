import express from "express";

export const router = express.Router();
const endpoint = '/api/reviews';

var reviewC = require('../../controllers/reviewC');

//GET /api/reviews index()
router.get('/', function (req, res) {
    console.log("trying to make database");
    let rc = new reviewC;
    res.json(rc.index());
    //res.json(reviewC.index());
});

//GET /api/games/:review_id show()
router.get('/:review_id', function (req, res) {
    res.json(reviewC.show(req.params));
});

// POST /api/reviews store()
router.post('/', function (req, res) {
    res.json(reviewC.store(req.body));
});

//PUT /api/reviews/:review_id update()
router.put('/:review_id', function (req, res) {
    res.json(reviewC.update(req.body, req.params));
});

//DELETE /api/reviews/:review_id destroy()
router.delete('/:review_id', function (req, res) {
    res.json(reviewC.destroy(req.params));
});