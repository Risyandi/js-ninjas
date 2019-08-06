/**
 * declares class
 */
class classAndConstruct {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // getter
    get areaCalculate() {
        return this.calculate();
    }

    // method
    calculate() {
        return this.height * this.width;
    }
}

const result = new classAndConstruct(10, 10);
console.log(result.areaCalculate); // output : 100

/**
 * expression class
 */
let calculateNamed = class calculateNamed2 {
    constructor(total, height, width) {
        this._total = total;
        this._height = height;
        this._width = width;
    }
}
console.log(calculateNamed.name, "expr class named"); // output : calculateNamed2


let calculateUnNamed = class {
    constructor(total, height, width) {
        this._total = total;
        this._height = height;
        this._width = width;
    }
}
console.log(calculateUnNamed.name, "expr class unnamed"); // output : calculateNamed    


/**
 * static method
 */

class Point {
    constructor(height, width) {
        this._height = height;
        this._width = width;
    }

    static distance(a, b) {
        return (a + b) * a;
    }
}
console.log(Point.distance(50, 10));


/**
 * export class with default name using when this class will be using on another class.
 */
// export default classAndConstruct;


/**
 * method bind(), bind create new function that will have this set to the first parameter passed to bind().
 */
let sample = function (content) {
    this.content = content;
}
sample.prototype.click = function () {
    console.log();
}
let mySample = new sample('OK');
mySample.click();
let mySampleII = mySample.click();
mySampleII();
let mySampleIII = mySample.click.bind(mySample);
mySampleIII();