const logger = require("morgan");
const mongoose = require("mongoose");
const express = require("express");

// PORT
const PORT = 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// ROUTES, RUDES, RO-ADS, ROW-ODES

app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
