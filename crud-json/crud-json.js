// data schema json
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

// Create data
var characterObject = {
    "name": "Bella Ramsey",
    "gender": "Female",
    "house": "Mormonts"
}
var character = "Lyanna";
family[character] = characterObject;
    console.log(family);

// Read data
var character = " Risyandi White";
var result = family[character];
    console.log(result);
    console.log(result.name);
    console.log(result.gender);
    console.log(result.house);

// Update data
var character = "John Mayer";
family[character].house = "Turki"
var result = family[character];
    console.log(result);


// Delete data
var character = "John Mayer";
delete family[character];
    console.log(family);

