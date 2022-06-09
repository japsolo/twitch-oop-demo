import Person from "./Person.js";

class Teacher extends Person {
   constructor(name, lastname) {
      super(name, lastname);
   }

   setStudentNote(student, note) {
      student.setNote(note);
   }
}

export default Teacher;
