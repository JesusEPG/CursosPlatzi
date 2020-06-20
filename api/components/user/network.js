const express = require('express');

const secure = require("./secure");
const response = require('../../..//network/response');

const Controller = require('./index');


const router = express.Router();

router.get('/', function(req, res) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

router.get('/:id', function(req, res) {
    console.log(req.params.id)
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

router.post('/', function(req, res) {
    console.log(req.body)
    Controller.upsert(req.body)
        .then((newUser) => {
            response.success(req, res, newUser, 201);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

router.put('/', secure('update'), function(req, res) {
    console.log(req.body)
    Controller.upsert(req.body)
        .then((newUser) => {
            response.success(req, res, newUser, 201);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

router.delete('/:id', function(req, res) {
    Controller.remove(req.params.id)
        .then((userId) => {
            response.success(req, res, userId, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

module.exports = router;