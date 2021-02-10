const router = require("express").Router();
const Workout = require("../models/workout");
const Path = require("path");

module.exports = router;

router.get("/exercise", (req, res) => {
  res.sendFile(Path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(Path.join(__dirname, "../public/stats.html"));
});
