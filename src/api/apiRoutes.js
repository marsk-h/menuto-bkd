const express = require('express');
const response = require('../routes/response');
const router = express.Router();

router.get('/', (req, res) => {
    response.success(req, res, message, 200);
});

const message = [
    {
        users: "http://localhost:3000/api/users",
    },
];

module.exports = router;