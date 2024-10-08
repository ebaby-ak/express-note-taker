const express = require('express');
const api = require('./routes/api');
const html = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api);

app.use(express.static('public'));

app.use(html);


app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`)
);