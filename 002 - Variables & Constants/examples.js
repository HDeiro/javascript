//#################################################
// Global Variables
//
// As told before, variables declared without any
// keyword were interpreted as global variables,
// being stored in the biggest scope available.
//
// In browsers, the biggest scope is "window". In
// NodeJS it's "global".
//#################################################

function globalVariables() {
    global_a = 10;
    console.log("Global Variables", global.global_a); // Global on NodeJS
    //console.log(window.global_a); // Window on Browser
}
globalVariables();

//#################################################
// Hoisted variables
//
// The declaration of hoisted variables were
// placed on top of the scope where it has been
// declared.
//
// This behavior may cause unexpected problems.
//#################################################

function hoistedVariables() {
    if(true)
        var hoisted_a = 10;
    
    if(true)
        var hoisted_b = 12;

    if(false)
        var hoisted_c = 14; // Will be undefined because it'll be declared but never assigned to nothing

    console.log("Hoisted Variables", hoisted_a, hoisted_b, hoisted_c);
}
hoistedVariables();

//#################################################
// Block scoped variables
//
// This approach will permit to create variables
// that will exists only in the block where it 
// has been declared. It may be an if or an entire
// function.
//#################################################

function blockScopedVariables() {
    let a = 10;

    if(true) {
        let b = 10;
        console.log("Block Scoped Variables (Inside Block)", a, b);
    }

    // Throw an error because b is not declared, uncomment to test
    // console.log("Block Scoped Variables (Outside Block)", a, b);
}
blockScopedVariables();

//#################################################
// Constant values
//
// Constants will hold the value while it exists
//#################################################

const const_a = 10;
console.log("Constant Values", const_a);
//const_a = 11; Throws an error, uncomment to test

//#################################################
// Constant references
//
// Constants will hold the reference for objects,
// but does not control the content of the objects
//#################################################

const const_b = {};
const_b.property = 10;
console.log("Constant References", const_b);
// const_b = 10; // Throws an error, uncomment to test

//#################################################
// Constant references of freezed objects
//
// In order to accomplish a real constant reference
// to an object, blocking it's editions, you may
// use a method called Object.freeze()
//#################################################

const const_c = Object.freeze({});
const_c.property = 10; // Assignment has been ignored
console.log("Constant Frozen References", const_c);