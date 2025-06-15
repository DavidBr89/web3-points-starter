interface Course {
  id: number;
  name: string;
  credits: number;
  attempts: number;
  description: string | null;
}

interface CourseWithEnrollments extends Course {
  enrollments: Enrollment[];
}

interface Student {
  id: number;
  name: string;
  email: string;
}

interface Enrollment {
  id: number;
  studentId: number;
  courseId: number;
  course: Course;
  student: Student;
  grades: Grade[];
}

interface Grade {
  id: number;
  enrollmentId: number;
  chance: number;
  value: string;
}
