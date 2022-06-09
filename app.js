import Teacher from "./classes/Teacher.js";
import Student from "./classes/Student.js";
import Course from "./classes/Course.js";

const PeterTeach = new Teacher("Peter", "Landon");

const JonSmith = new Student("Jon", "Smith");
const JaneDoe = new Student("Jane", "Doe");

const feCourseReact = new Course("Front End React");
const beCourseJava = new Course("Back End Java");

feCourseReact.setStudent(JonSmith);
feCourseReact.setStudent(JaneDoe);

beCourseJava.setStudent(JaneDoe);

PeterTeach.setStudentNote(JonSmith, 5);
PeterTeach.setStudentNote(JaneDoe, 9);

console.log(JonSmith.getFullName());
console.log(JonSmith.getNote());
console.log(JonSmith.isAproved());

console.log(JaneDoe.getFullName());
console.log(JaneDoe.getNote());
console.log(JaneDoe.isAproved());

console.log("================================");
console.log(feCourseReact.getName());
feCourseReact.getStudents().forEach((student) => {
   console.log(student.getFullName());
});

console.log("================================");
console.log(beCourseJava.getName());
beCourseJava.getStudents().forEach((student) => {
   console.log(student.getFullName());
});
