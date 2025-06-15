const prisma = require("../config/prisma");
const { faker } = require("@faker-js/faker/locale/nl_BE");

async function main() {
  const students = [];
  for (let i = 0; i < 30; i++) {
    const name = faker.person.fullName();
    students.push({
      name: name,
      email: `${name.toLowerCase().replace(/\s+/g, ".")}@student.hogent.be`,
    });
  }

  await prisma.student.createMany({
    data: students,
    skipDuplicates: true,
  });

  const courses = [
    { name: "Werkveld contact & Nieuwe technologie", credits: 4 },
    { name: "Programmeren basis 1", credits: 12 },
    { name: "Softwareontwerp 1", credits: 6 },
    { name: "Digitale werkomgeving workshop 1", credits: 3 },
    { name: "Web 1", credits: 3 },
    { name: "Databanken 1", credits: 6 },
    { name: "Programmeren Gevorderd 1", credits: 9 },
    { name: "Workshop communicatietechnieken", credits: 3 },
    { name: "Softwareontwerp 2", credits: 4 },
    { name: "Web 2", credits: 6 },
    { name: "Digitale werkomgeving workshop 2", credits: 4 },
    { name: "Web 3", credits: 6 },
    { name: "Programmeren Gevorderd 2", credits: 6 },
    { name: "Projectwerk 2", credits: 6 },
    { name: "Nieuwe Technologie", credits: 3 },
    { name: "Programmeren Gevorderd 3", credits: 6 },
    { name: "Organisatie", credits: 3 },
    { name: "Stage", credits: 20 },
    { name: "Graduaatsproef", credits: 4 },
    { name: "Mobile", credits: 6 },
  ];

  await prisma.course.createMany({
    data: courses,
    skipDuplicates: true,
  });

  // Ophalen van alle studenten en courses met hun id's
  const allStudents = await prisma.student.findMany();
  const allCourses = await prisma.course.findMany();

  // Elke student inschrijven in 5-12 random vakken
  let enrollments = [];
  for (const student of allStudents) {
    // Random aantal vakken per student
    const numCourses = faker.number.int({ min: 5, max: 12 });
    // Random unieke vakken selecteren
    const shuffledCourses = faker.helpers.shuffle(allCourses);
    const selectedCourses = shuffledCourses.slice(0, numCourses);

    for (const course of selectedCourses) {
      enrollments.push({
        studentId: student.id,
        courseId: course.id,
      });
    }
  }

  // Zorgen dat elk vak minstens 3 studenten heeft
  for (const course of allCourses) {
    const enrolledForCourse = enrollments.filter(
      (e) => e.courseId === course.id
    );
    if (enrolledForCourse.length < 3) {
      // Selecteer random studenten die nog niet ingeschreven zijn voor dit vak
      const notYetEnrolled = allStudents.filter(
        (s) => !enrolledForCourse.some((e) => e.studentId === s.id)
      );
      const extraStudents = faker.helpers
        .shuffle(notYetEnrolled)
        .slice(0, 3 - enrolledForCourse.length);
      for (const student of extraStudents) {
        enrollments.push({
          studentId: student.id,
          courseId: course.id,
        });
      }
    }
  }

  // Unieke combinaties (studentId, courseId)
  const uniqueEnrollments = Array.from(
    new Map(
      enrollments.map((e) => [`${e.studentId}-${e.courseId}`, e])
    ).values()
  );

  await prisma.enrollment.createMany({
    data: uniqueEnrollments,
    skipDuplicates: true,
  });

  console.log("Studenten willekeurig ingeschreven in vakken!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
