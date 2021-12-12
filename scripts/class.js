export class Person {
    constructor(name) {
       this.name = name;
    }

    sayHello(name) {
        console.log(`Hello ${name} : My Name is ${this.name}`);
    }
}