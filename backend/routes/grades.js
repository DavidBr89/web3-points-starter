// GRADE: 4
const express = require("express");
const gradesController = require("../controllers/grades_controller");
const gradeMiddleware = require("../middlewares/gradeMiddleware");
const router = express.Router();

// TODO: Maak een route voor de GET request naar / en koppel deze aan de getAll methode van de gradesController

// TODO: Maak een route voor de POST request naar / en koppel deze aan de create methode van de gradesController maak ook gebruik van de gradeMiddleware

// TODO: Maak een route voor de GET request naar /:enrollmentId/attempt/:attemptNumber en koppel deze aan de getByEnrollmentId methode van de gradesController

module.exports = router;
