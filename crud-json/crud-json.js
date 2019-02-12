var family = {
    "Risyandi": {
        "name": "Risyandi white",
        "gender": "male",
        "house": "jatinangor"
    },
    "Angela": {
        "name": "angela white",
        "gender": "female",
        "house": "india"
    },
    "Mariska": {
        "name": "mariska white",
        "gender": "female",
        "house": "australia"
    },
}

// create add character
var characterObject = {
    "name": "Bella Ramsey",
    "gender": "Female",
    "house": "Mormonts"
}
var character = "Lyanna";
family[character] = characterObject;
console.log(family);

// read find character
var character = " Risyandi White";
var result = family[character];
console.log(result);
