const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const dbPath = path.join(__dirname, '../db/db.json');

router.get("/api/notes", async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync(dbPath, "utf8"));
  res.json(dbJson);
});

router.post("/api/notes", (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJson.push(newNote);
  fs.writeFileSync(dbPath, JSON.stringify(dbJson));

  return res.status(201).json({
    status: "successful",
    data: newNote,
  });
});

router.delete("/api/notes/:id", (req, res) => {
  let data = fs.readFileSync(dbPath, "utf8");
  const dataJson = JSON.parse(data);
  const noteIndex = dataJson.findIndex((note) => 
    note.id === req.params.id);

  fs.writeFileSync(dbPath, JSON.stringify(noteIndex));
  res.json("Note deleted successfully");
});

module.exports = router;