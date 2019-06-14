/**
 *  In classic function expressions, the this keyword is bound to different values based on the context in which the function is called. 
 *  Whereas arrow functions use the value of this in their lexical scope. This leads to very different behaviour.
 *  The context is (roughly) the object that calls the function. And the scope is all the variables visible to a function where it is defined. 
 * */

// classic function
function name(params) {

}

// arrow function
const arrowFuctionName = () => {

};

let Obj = {
    myVar: 'lorem ipsum',
    myFunc: function () {
        console.log(this.myVar);
    },
    myFunc2: function() {
        console.log("hallo");

        // to access scope 
        let self =  this

        setTimeout(function() {
            console.log(this.myVar); // output: undefined -> because outside scope
            console.log(self.myVar); // output: lorem ipsum -> if adding var self
        }, 1000);
    }
};
Obj.myFunc(); // output: lorem ipsum
Obj.myFunc2(); // output: hallo

// testing scope in arrow function
// myFunc2(); // output: error "myFunc2 is not defined" -> because not in the scope