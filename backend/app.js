// GRADE: 3

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // TODO: Check of dit de juiste URL is voor je frontend
  })
);

// TODO: Koppel de studentsRouter, gradesRouter en coursesRouter aan de juiste routes /students, /grades en /courses (3 in totaal)
// Vergeet niet de routes te importeren bovenaan dit bestand

module.exports = app;
