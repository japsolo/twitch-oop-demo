import Person from "./Person.js";

class Student extends Person {
   #note = 0;

   constructor(name, lastname) {
      super(name, lastname);
   }

   setNote(note) {
      this.#note = note;
   }

   getNote() {
      return this.#note;
   }

   isAproved() {
      return this.#note >= 6;
   }
}

export default Student;
