const express = require('express');

const secure = require("./secure");
const response = require('../../../network/response');

const Controller = require('./index');


const router = express.Router();

//Add funciones para  editar posts

//Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', insert);
router.put('/', secure('update'), upsert);

function list(req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next);
}

function get(req, res, next) {
    Controller.get(req.params.id)
        .then((post) => {
            response.success(req, res, post, 200);
        })
        .catch(next);
}

function insert(req, res, next) {
    Controller.insert(req.body)
        .then(() => {
            response.success(req, res, req.body, 201);
        })
        .catch(next);
}

function upsert(req, res, next) {
    Controller.upsert(req.body)
        .then((updatedUser) => {
            response.success(req, res, updatedUser, 201);
        })
        .catch(next);
}

module.exports = router;