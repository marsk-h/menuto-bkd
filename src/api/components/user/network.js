const express = require('express');
const response = require('../../../routes/response');
const router = express.Router();
const controller = require('./index');

const list = (req, res, next) => {
    controller.list().then((list) => {
        try {
            for (let x = 0; x < list.length; x++) {
                //delete list[x].Password;
            }
        } catch (error) {
            console.log(error);
        } finally {
            response.success(req, res, list, 200);
        }
    }).catch(next);
};

const get = (req, res, next) => {
    controller.get(req.params.id)
    .then((user) => {
        try {
            response.success(req, res, user, 200);
        } catch (error) {
            console.log(error);
        }
    }).catch(next);
};

// const insert = (req, res, next) => {
//     controller
//     .insert(req.body)
//     .then((user) => {
//         try {
//             response.success(req, res, user, 201);
//         } catch (error) {
//             console.log(error);
//         }
//     }).catch(next);
// };

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
    .update(req.body)
    .then((user) => {
        try {
            response.success(req, res, user, 200);
        } catch (error) {
            console.log(error);
        }
    }).catch(next);
};

// const remove = (req, res, next) => {
//     controller
//     .remove(req.params.id)
//     .then((user) => {
//         try {
//             response.success(req, res, user, 201);
//         } catch (error) {
//             console.log(error);
//         }
//     }).catch(next);
// };

router.get('/', list);
router.get('/id/:id', get);
// router.post('/new', insert);
router.post('/search', search);
router.put('/update', update);
//router.delete('/delete/:id', remove);

module.exports = router;