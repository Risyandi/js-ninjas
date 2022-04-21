function driveToStore(callback) {
    console.log("opening the car door");
    console.log("sitting down");
    console.log("putting on the seat belt");
    console.log("checking mirrors");
    console.log("starting the car");
    callback();
    console.log("driving to the store");
}

function checkForCars() {
    console.log('checking for other cars');
}