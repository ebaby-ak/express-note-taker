const express = require('express');
const api = require('./routes/api');
const html = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();


app.listen(port, () => console.log('App listening on http://localhost:${PORT}')
);