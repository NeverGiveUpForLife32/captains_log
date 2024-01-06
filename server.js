require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jsxEngine = require("jsx-view-engine");
const Log = require("./models/logs");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true })); //used to build a ssr website. A regular website
// app.use(express.json()) used when building an api
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

mongoose.connect(process.env.MONGO_URI); //the .env file we created will turn it into a javascript object. The MONGO_URI will like me to the mongoDB database
mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
});

// INDUCES

// INDEX
// list all logs
app.get("/logs", async (req, res) => {
  try {
  } catch (error) {}
});

// NEW
// show the user a form to fill out to create a log
app.get("/logs/new", (req, res) => {
  res.render("logs/New");
});

// DELETE
// backend only functionality that is used to delete a log

// UPDATE
// backend only functionality that is used to update a log

// CREATE
// backend only functionality that is used to create a log

app.post("/logs", async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  try {
    const createdLog = await Log.create(req.body);
    res.redirect(`/logs/${createdLog._id}`);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// EDIT
// show you a form that lets you edit the log

// SHOW
// Shows you 1 individual log

app.listen(PORT, () => {
  console.log(`Ayo the Port at ${PORT} is lit `);
});
