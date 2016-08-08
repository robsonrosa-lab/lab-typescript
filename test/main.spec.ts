///<reference path="../typings/index.d.ts"/>
///<reference path="../src/main.ts"/>

describe('Student Class', () => {
    it('student first name', () => {
        expect(new Student('robson', 'rosa').firstName).toEqual(`robson`);
    });

    it('student last name', () => {
        expect(new Student('robson', 'rosa').lastName).toEqual(`rosa`);
    });

    it('student greetings', () => {
        expect(new Student('robson', 'rosa').greet()).toEqual(`Hello! My name is robson rosa and I'm a student.`);
    });
});

describe('Professor Class', () => {
    it('professor first name', () => {
        expect(new Professor('robson', 'rosa').firstName).toEqual(`robson`);
    });

    it('professor last name', () => {
        expect(new Professor('robson', 'rosa').lastName).toEqual(`rosa`);
    });

    it('professor greetings', () => {
        expect(new Professor('robson', 'rosa').greet()).toEqual(`Hello! My name is robson rosa and I'm a professor.`);
    });
});