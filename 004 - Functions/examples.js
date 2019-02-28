
//#################################################
// Simple function
//#################################################

function simpleFunction() {
    console.log("Simple function");
}
simpleFunction();

//#################################################
// Callback function
//
// Callback functions are functions passed as
// parameter to another functions
//#################################################

function receiveCallbackFunction(callback) {
    console.log("Called via callback");
    callback();
}
receiveCallbackFunction(simpleFunction);

//#################################################
// Callback anonymous function
//
// It's a callback function declared directly
// on the caller invocation.
//#################################################

receiveCallbackFunction(function() {
    console.log("Anonymous function as callback");
})

//#################################################
// Default parameter function
//
// It's a function that has default values for
// the parameters. If the value is sent during the
// invocation, it'll overwrite the default value,
// otherwise, the default will be used.
//#################################################

function receiveCallbackFunctionHavingDefault(callback = simpleFunction) {
    callback();
}
receiveCallbackFunctionHavingDefault();
receiveCallbackFunctionHavingDefault(function() {
    console.log("Other");
})

//#################################################
// Single parameter Arrow Function
//#################################################

const sayHelloToPerson = name => console.log("Hello, " + name); //Could also be (name) => console.log("Hello, " + name)
sayHelloToPerson("Hugo");

//#################################################
// No Parameter Arrow Function
//#################################################

const sayHelloWithNoParameter = () => console.log("Hello without parameter");
sayHelloWithNoParameter();

//#################################################
// Ghost parameter Arrow Function
//#################################################

const sayHelloWithGhostParameter = _ => console.log("Hello ghost parameter", _);
sayHelloWithGhostParameter();

//#################################################
// Arrow Function multiple parameters
//#################################################

const sayHelloNameAndSurname = (name, surname) => console.log("Hello, " + name + " " + surname);
sayHelloNameAndSurname("Hugo", "Deiró");