import { v4 as uuidv4 } from "uuid";

class Course {
   #id;
   #name;
   #students = [];

   constructor(name) {
      this.#id = uuidv4();
      this.#name = name;
   }

   getId() {
      return this.#id;
   }

   getName() {
      return this.#name;
   }

   setStudent(student) {
      this.#students = [...this.#students, student];
   }

   getStudents() {
      return this.#students;
   }
}

export default Course;
