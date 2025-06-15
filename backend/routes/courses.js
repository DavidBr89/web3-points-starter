// GRADE: 3
const express = require("express");
const coursesController = require("../controllers/courses_controller");
const router = express.Router();

// TODO: Maak een route voor de GET request naar / en koppel deze aan de getAll methode van de coursesController

// TODO: Maak een route voor de GET request naar /:id en koppel deze aan de getById methode van de coursesController

// TODO: Maak een route voor de GET request naar /:id/grades en koppel deze aan de getGradesByCourseId methode van de coursesController

module.exports = router;
