const router = require('express').Router();
const path = require('path');
const { UUIDV4 } = require('sequelize');

router.get('/api/notes', async (req, res) => {
const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
res.json(dbJson);
});

router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);

    return res.status(201).json({
        status: "successful",
        data: newNote,
    });
});

module.exports = router;