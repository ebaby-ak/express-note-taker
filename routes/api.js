const api = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');

api.get('/', (req, res) => {
    fs.readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

api.post('/', (req, res) => {
    console.log(req.body);

    const  {title, text, id} = req.body;

    if (req.body) {
        const newNote = {
            id: uuid(),
            title,
            text,
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = api;