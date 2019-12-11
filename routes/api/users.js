import express from "express";
import {authenticateUser} from "../../middlewares/auth";

export const router = express.Router();
const endpoint = '/api/users';

var userC = require('../../controllers/userC');

//GET /api/users index()
router.get('/', authenticateUser, function (req, res) {
    //let uc = new userC;
    //res.json(uc.index());
    //res.json(uc.destroyTable());

    res.json(userC.index());
});

//GET /api/users index()
router.post('/login', function (req, res) {
    res.send(userC.login(req.body));
});

//GET /api/users/:review_id show()
router.get('/:user_id', authenticateUser, function (req, res) {
    res.json(userC.show(req.params));
});

// POST /api/reviews store()
router.post('/', function (req, res) {
    res.json(userC.store(req.body));
});

//PUT /api/reviews/:review_id update()
router.put('/:user_id', authenticateUser, function (req, res) {
    res.json(userC.update(req.body, req.params));
});

//DELETE /api/reviews/:review_id destroy()
router.delete('/:user_id',authenticateUser, function (req, res) {
    res.json(userC.destroy(req.params));
});