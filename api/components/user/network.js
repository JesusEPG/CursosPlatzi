const express = require('express');

const secure = require("./secure");
const response = require('../../../network/response');

const Controller = require('./index');


const router = express.Router();



router.get('/', function(req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next);
});

router.get('/following', secure('followers'), function(req, res, next) {
    Controller.following(req.user.id)
        .then((followers) => {
            response.success(req, res, followers, 200);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    console.log(req.params.id)
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(next);
});



router.post('/', function(req, res, next) {
    console.log(req.body)
    Controller.upsert(req.body)
        .then((newUser) => {
            response.success(req, res, newUser, 201);
        })
        .catch(next);
});

router.post('/follow/:id', secure('follow'), function(req, res, next) {
    Controller.follow(req.user.id , req.params.id)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch(next);
});

router.put('/', secure('update'), function(req, res, next) {
    console.log(req.body)
    Controller.upsert(req.body)
        .then((newUser) => {
            response.success(req, res, newUser, 201);
        })
        .catch(next);
});

router.delete('/:id', function(req, res, next) {
    Controller.remove(req.params.id)
        .then((userId) => {
            response.success(req, res, userId, 200);
        })
        .catch(next);
});

module.exports = router;