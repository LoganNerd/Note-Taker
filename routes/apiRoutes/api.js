const path = require("path");
const app = require("express").Router();
let db = require("../../db/db.json");
const fs = require("fs");

app.get("/notes", function (req, res) {
  res.json(db);
});

app.post("/notes", function (req, res) {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: Math.random(),
  };
  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  res.json(db);
});

module.exports = app;
