const express = require('express');
const response = require('../../../routes/response');
const router = express.Router();
const controller = require('./index');

const message = [
    {
        message: "Email ya fue utilizado!",
    },
    {
        message: "Telefono ya fue utilizado!",
    },
    {
        message: "Email y/o Password no coinciden!"
    },
];

const login = (req, res, next) => {
    controller
    .login(req.body)
    .then((user) => {
        let token = null;
        if (user.length > 0) {
            try {
                response.success(req, res, user, 200);
            } catch (error) {
                console.log(error);
            }
        } else {
            response.success(req, res, message[2], 401);
        }
    }).catch(next);
};

const get = (req, res, next) => {
    controller
    .get(req.params.id)
    .then((user) => {
        try {
            response.success(req, res, user, 200);
        } catch (error) {
            console.log(error);
        }
    }).catch(next);
};

const insert = (req, res, next) => {
    controller
    .check(req.body, 0)
    .then((user) => {
        if (user.length > 0) {
            response.success(req, res, message[0], 200);
        } else {
            controller
            .insert(req.body)
            .then((user) => {
                try {
                    response.success(req, res, user, 201);
                } catch (error) {
                    console.log(error);
                }
            }).catch(next);
        }
    }).catch(next);
};

const search = (req, res, next) => {
    controller
    .search(req.body.Value)
    .then((user) => {
        try {
            response.success(req, res, user, 200);
        } catch (error) {
            console.log(error);
        }
    }).catch(next);
};

const update = (req, res, next) => {
    controller
    .check(req.body, 1)
    .then((user) => {
        if (user.length > 0) {
            response.success(req, res, message[1], 200);
        } else {
            controller
            .update(req.body)
            .then((user) => {
                try {
                    response.success(req, res, user, 201);
                } catch (error) {
                    console.log(error);
                }
            }).catch(next);
        }
    }).catch(next);
};

router.get('/id/:id', get);
router.post('/login', login);
router.post('/new', insert);
router.post('/search', search);
router.put('/update', update);

module.exports = router;