const router = require('express').Router();
const path = require('path');

router.get('/api/notes', (req, res) => {
const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
res.json(dbJson);
});

router.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, '../public/assets/notes.html'))
});

module.exports = router;