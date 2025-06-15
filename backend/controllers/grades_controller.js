// GRADE: 12

const prisma = require("../config/prisma");

const gradesController = {
  // TODO: Implementeer de getAll request handler, gebruik hiervoor de volgende Prisma query:
  // prisma.grade.findMany()
  // Stuur de grades terug als JSON response
  // Vergeet de foutenafhandeling niet!
  //
  // TODO: Implementeer de create request handler, gebruik hiervoor de volgende Prisma query:
  // prisma.grade.upsert({
  //   where: {
  //     enrollmentId_chance: {
  //       enrollmentId: enrollmentId,
  //       chance: chance,
  //     },
  //   },
  //   update: {
  //     value: grade,
  //   },
  //   create: {
  //     chance: chance,
  //     enrollment: {
  //       connect: { id: enrollmentId },
  //     },
  //     value: grade,
  //   },
  // })
  // Haal de enrollmentId, grade en chance op uit het request object deze zijn meegegeven na een POST request
  // Als de enrollmentId, grade of chance niet meegegeven zijn, stuur dan een 400 status code terug met een error message
  // Stuur de nieuwe of geüpdatete grade terug als JSON response
  // Vergeet de foutenafhandeling niet!
  //
  // TODO: Implementeer de getByEnrollmentId request handler, gebruik hiervoor de volgende Prisma query:
  // prisma.grade.findFirst({
  //   where: {
  //     enrollmentId: parsedEnrollmentId,
  //     chance: parsedAttemptNumber,
  //   },
  // })
  // Haal de enrollmentId en attemptNumber op uit het request object, deze zijn meegegeven in de URL
  // Vergeet niet om de omzetting te doen van de enrollmentId en attemptNumber
  // Als de enrollmentId of attemptNumber niet meegegeven zijn, stuur dan een 400 status code terug met een error message
  // Als de grade niet gevonden is, stuur dan een 404 status code terug met een error message
  // Stuur de grade terug als JSON response
  // Vergeet de foutenafhandeling niet!
};

module.exports = gradesController;
