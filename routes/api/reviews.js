import express from "express";
import {authenticateUser} from "../../middlewares/auth";

export const router = express.Router();
const endpoint = '/api/reviews';

var reviewC = require('../../controllers/reviewC');
router.use(authenticateUser);

//GET /api/reviews index()
router.get('/', function (req, res) {
    //let rc = new reviewC;
    //res.json(rc.index());
    //res.json(rc.destroyTable());

    res.json(reviewC.index());
});

//GET /api/reviews/:review_id show()
router.get('/:review_id', function (req, res) {
    res.json(reviewC.show(req.params));
});

// POST /api/reviews store()
router.post('/', function (req, res) {
    res.json(reviewC.store(req.body, req.user.id));
});

//PUT /api/reviews/:review_id update()
router.put('/:review_id', function (req, res) {
    res.json(reviewC.update(req.body, req.params));
});

//DELETE /api/reviews/:review_id destroy()
router.delete('/:review_id', function (req, res) {
    res.json(reviewC.destroy(req.params));
});