/** without loop : using map */
var names = ["Jack", "Jecci", "Ram", "Tom"];
var upperCaseName = names.map(name => name.toUpperCase());
console.log(upperCaseName);

/** without loop : using forEach */
var names2 = ["Jack", "Jecci", "Ram", "Tom"];
names2.forEach(name2 => print(name2));

/** without loop : using filter */
var number = [1, 2, 3, 4, 5, 6, 7];
var odd = number.filter(n => n % 2); // single line


/** without loop : using reduce */
var number2 = [1, 2, 3, 4, 5, 6, 7];

function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}

var initialVal = 0;
var result = number2.reduce(sum, initialVal);


/** without loop : using some */
var names3 = ["Ram", "Raj", "Rahul", "Risyandi"];
let isPresent = names3.some(name => name === "Rahul");

if (isPresent) {
    console.log("%c found Rahul", "color:red");
}

/** without loop : using every */
var num = [1, 2, 3, 4, 5, 6];
var isZeroFree = num.every(e => e > 0);
if (!isZeroFree) {
    console.log("0 present in array");
}