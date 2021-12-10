require('dotenv').config();
const express = require('express');
const router = require('./app/router_v1');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/v1', router)

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});