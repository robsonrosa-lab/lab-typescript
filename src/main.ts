interface IPerson {
   firstName: string;
   lastName: string;
}

abstract class Person implements IPerson {
   firstName: string;
   lastName: string;

   constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
   }

   abstract getTitle(): string;

   greet() {
      return `Hello! My name is ${this.firstName} ${this.lastName} and I'm a ${this.getTitle()}.`;
   }
}

class Student extends Person {
   constructor(firstName: string, lastName: string) {
      super(firstName, lastName);
   }

   getTitle() {
      return 'student';
   }
}

class Professor extends Person {

   constructor(firstName: string, lastName: string) {
      super(firstName, lastName);
   }

   getTitle() {
      return 'professor';
   }
}

let student = new Student('Alan', 'Turing'),
   professor = new Professor('Albert', 'Eistein');