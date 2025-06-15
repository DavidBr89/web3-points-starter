// GRADE: 4
// TODO: Implementeer de gradeMiddleware die controleert of het punt een getal is tussen 0 en 20, of "AFW" is.
// OPGELET: De punten komen als string binnen in het request object, na een POST request dus vergeet niet de omzetting te doen.
// Als het punt niet geldig is, stuur dan een 400 status code terug met een error message.
// Als het geldig punt is of "AFW", laat de request doorgaan naar de volgende middleware of route handler.

module.exports = gradeMiddleware;
