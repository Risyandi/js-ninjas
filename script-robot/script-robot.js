// Define roads
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];


// function for build graphs 
function buildGraph(edges) {
    let graph = Object.create(null);
    // console.log(graph, ": value of graph");

    // function for Adding edges
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
            var cek = graph[from] = [to];
            // console.log(cek, ": cek graph 1");
        } else {
            graph[from].push(to);
            var cek2 = graph[from].push(to);
            // console.log(cek2, ": cek graph 2");
        }
    }

    // looping for split data from roads
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        var cek3 = addEdge(from, to);
        // console.log(cek3, ":cek graph 3");

        addEdge(to, from);
        var cek4 = addEdge(to, from);
        // console.log(cek4, ":cek graph 4");
    }
    console.log(graph, "graph");
    return graph;
}


// call roads graph
const roadGraph = buildGraph(roads);
console.log(roadGraph, ":road Graph");


// creates a classes of villageState
class villageState {
    constructor(place, parcels) {
        this.place = place;
        // console.log(this.place, ":place");
        this.parcels = parcels;
        // console.log(this.parcels, ":parcels");
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return { place: destination, address: p.address };
            }).filter(p => p.place != p.address);
            return new villageState(destination, parcels);
        }
    }
}

// creates variable first 
let first = new villageState(
    "Post Office",
    [{ place: "Post Office test", address: "Alice's House test" }]
);

// move value of first variable to variable next
let next = first.move("Alice's House");

// check on console
console.log(next.place, ":next place"); // Alice's House
console.log(next.parcels, ":parcels"); // []
console.log(first.place, ":first place"); // Post Office


// persistent data using freeze
let object = Object.freeze({ value: 5 });
object.value = 10;
console.log(object.value, ":object value using freeze");

// simulation
function runRobot(state, robot, memory) {
    console.log(state, ":value state1");
    console.log(robot, ":value robot1");
    console.log(memory, ":value memory1");
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        console.log(action, ":value of action");
        state = state.move(action.direction);
        console.log(state, ":value of state");
        memory = action.memory;
        console.log(memory, ":value of memory");
        console.table(roads, "table");
        console.log(`moved to ${action.direction}`);
    }
}

function randomPick(array) {
    console.log(array, ":value of array");
    let choice = Math.floor(Math.random() * array.length);
    console.log(choice, ":value of choice");
    return array[choice];
}

function randomRobot(state) {
    console.log(state, ":value of state");
    return { direction: randomPick(roadGraph[state.place]) };
}

villageState.random = function (parcelCount = 5) {
    let parcels = [];
    console.log(parcelCount, ":value of parcelCount");
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        console.log(address, ":value of address");
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
            console.log(place, ":value of place");
        } while (place == address);
        parcels.push({ place, address });
    }
    return new villageState("Post Office", parcels);
};

// start up ua virtual world
runRobot(villageState.random(), randomRobot);


/**
 * define mail routes
 */
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Erni's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
    console.log(graph, ":value graph", from, ":value from", to, ":value to");

    let work = [{ at: from, route: [] }];
    console.log(work, ":value of work");

    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}

function goalOrientedRobot({ place, parcels }, route) {
    console.log(place, parcels, route, "goalOrientedRobot");
    
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}