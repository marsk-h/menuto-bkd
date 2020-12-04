const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const router = require('./routes/routes');
const errors = require('./routes/errors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(errors);

router(app);

const server = app.listen(process.env.PORT, () => {
    console.log(`Listening http://localhost:${process.env.PORT}`);
});
