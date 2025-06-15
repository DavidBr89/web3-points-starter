// GRADE: 11
const prisma = require("../config/prisma");

const coursesController = {
  // TODO: Implementeer de getAll request handler, gebruik hiervoor de volgende Prisma query:
  // prisma.course.findMany()
  // Stuur de courses terug als JSON response
  // Vergeet de foutenafhandeling niet!
  //
  // TODO: Implementeer de getById request handler, gebruik hiervoor de volgende Prisma query:
  // prisma.course.findUnique({
  //   where: { id: parseInt(id, 10) },
  //   include: {
  //     enrollments: {
  //       include: {
  //         student: true,
  //         grades: true,
  //       },
  //     },
  //   },
  // })
  // Je haalt de id op uit het request object, de id is meegegeven in de URL
  // Als de course niet gevonden is, stuur dan een 404 status code terug met een error message
  // Stuur de course terug als JSON response
  // Vergeet de foutenafhandeling niet!
  //
  // TODO: Implementeer de getGradesByCourseId request handler, gebruik hiervoor de volgende Prisma query:
  // prisma.grade.findMany({
  //   where: {
  //     enrollment: {
  //       courseId: parsedCourseId,
  //     },
  //   },
  // })
  // Je haalt de id op uit het request object, de id is meegegeven in de URL en vergeet niet om de omzetting te doen van de id
  // Stuur de grades terug als JSON response
  // Vergeet de foutenafhandeling niet!
};

module.exports = coursesController;
