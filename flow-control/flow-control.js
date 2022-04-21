function driveToStore(callback) {
    console.log('opening the car door');
    console.log('sitting down');
    console.log('putting on the seat belt');
    console.log('checking mirrors');
    console.log('starting the car');
    setTimeout(function () {
        console.log('checking for other cars');
    }, 1000);
    console.log('driving to the store');
}
driveToStore();