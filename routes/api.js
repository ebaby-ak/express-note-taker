const router = require('express').Router();
const fs = require('fs');
const uuidv4 = require('uuid');

router.get("/api/notes", async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  res.json(dbJson);
});

router.post("/api/notes", (req, res) => {
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

router.delete("/api/notes/:id", (req, res) => {
  let data = fs.readFileSync("db/db.json", "utf8");
  const dataJson = JSON.parse(data);
  const noteIndex = dataJson.findIndex((note) => {
    return note.id === req.params.id;
  });
  fs.writeFileSync("db/db.json", JSON.stringify(noteIndex));
  res.json("Note deleted successfully");
});

module.exports = router;