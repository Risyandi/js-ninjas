
function Person(age, weight) {
    this.age = age;
    this.weight = weight;
}

Person.prototype.getInfo = function () {
    return "I'm " + this.age + " years old" + " and have weight " + this.weight + " kilo.";
}

function Employee(age, weight, salary) {
    this.age = age;
    this.weight = weight;
    this.salary = salary;
}

Employee.prototype = new Person;

Employee.prototype.getInfo = function () {
    return "I'm " + this.age + " years old" + " and have weight " + this.weight + " kilo" + " and earn " + this.salary + " dollar";
}

var Person = new Person(22, 50);
var Employee = new Employee(22, 50, 100);
console.log(Person.getInfo(), ":value of person");
console.log(Employee.getInfo(), ":value of employee");
