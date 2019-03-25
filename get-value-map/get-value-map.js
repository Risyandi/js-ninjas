var myObject = {
    "8": [{
        "temp": {
            "a": 1
        },
        "algo-id": 1
    }, {
        "temp": {
            "a": 2
        },
        "algo-id": 101
    }],
    "13": {
        "temp": {
            "temp1": [1, 2]
        },
        "algo-id": 2
    }
};
var getElm = document.querySelector('.valueMap');

function search() {
    for (var object in myObject) {
        console.log(object, ":value of object");
        if (myObject.hasOwnProperty(object)) {
            var valObj = myObject[object];
            getElm.innerHTML += valObj;
            console.log('Object?', typeof myObject[object]);
            console.log(myObject[object]);
        }
    }
}

search();
