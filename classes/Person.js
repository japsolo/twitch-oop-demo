class Person {
   #name;
   #lastname;

   constructor(name, lastname) {
      this.setName(name);
      this.setLastname(lastname);
   }

   setName(name) {
      this.#name = name;
   }

   setLastname(lastname) {
      this.#lastname = lastname;
   }

   getFullName() {
      return `${this.#name} ${this.#lastname}`;
   }
}

export default Person;
