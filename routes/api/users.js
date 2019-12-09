import express from "express";

export const router = express.Router();
const endpoint = '/api/users';

var userC = require('../../controllers/userC');

//GET /api/reviews index()
router.get('/', function (req, res) {
    // let uc = new userC;
    // res.json(uc.index());
    res.json(userC.index());
});

//GET /api/games/:review_id show()
router.get('/:user_id', function (req, res) {
    res.json(userC.show(req.params));
});

// POST /api/reviews store()
router.post('/', function (req, res) {
    res.json(userC.store(req.body));
});

//PUT /api/reviews/:review_id update()
router.put('/:user_id', function (req, res) {
    console.log("api/users with a 'put' request");
    res.json(userC.update(req.body, req.params));
});

//DELETE /api/reviews/:review_id destroy()
router.delete('/:user_id', function (req, res) {
    res.json(userC.destroy(req.params));
});