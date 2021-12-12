export class Person {
    constructor(name) {
       this.name = name;
    }

    sayHello(name) {
        console.log(`Hello ${name}: MY Name is ${this.name}`);
    }
}