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
// list all fruits
app.get("/logs", async (req, res) => {
  try {
  } catch (error) {}
});

// NEW
// show the user a form to fill out to create a fruit
app.get("/logs/new", (req, res) => {
  res.render("new");
});

// DELETE
// backend only functionality that is used to delete a fruit

// UPDATE
// backend only functionality that is used to update a fruit

// CREATE
// backend only functionality that is used to create a fruit

// EDIT
// show you a form that lets you edit the fruit

// SHOW
// Shows you 1 individual fruit

app.listen(PORT, () => {
  console.log(`Ayo the Port at ${PORT} is lit `);
});
