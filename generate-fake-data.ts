import { randEmail, randJobTitle, randFullName } from "@ngneat/falso";
import { Lesson } from "src/app/shared/api-types/lesson";
import { Student } from "src/app/shared/api-types/student";

const USERS_ROWS_NUMBER = 30;
const LEARNINGS_ROWS_NUMBER = 500;

const database: { students: Array<Student>, lessons: Array<Lesson> } = {
  students: [],
  lessons: [],
};

const hasAssignedStudent = (): boolean => {
  // 10% chance not to have an assigned student
  return Math.floor(Math.random() * 11) <= 9 ?? false;
};

for (let i = 1; i <= USERS_ROWS_NUMBER; i++) {
  database.students.push({
    id: i,
    name: randFullName(),
    email: randEmail(),
  });
}

for (let i = 1; i <= LEARNINGS_ROWS_NUMBER; i++) {
  database.lessons.push({
    id: i,
    name: "How to become a " + randJobTitle(),
    status: "active",
    userId: hasAssignedStudent()
      ? Math.floor(Math.random() * USERS_ROWS_NUMBER) + 1
      : -1,
  });
}

console.log(JSON.stringify(database));
