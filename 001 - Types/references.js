//#################################################
// Declarations
//#################################################

var a;
var b;

//#################################################
// Case 1 - Immutable Values
//
// Does not matches because immutable
// values are not reference-based, but
// value-based.
//
// So, when b is setted as a, it does
// not create a reference of a to b, but
// copies the value of a to b. So, each
// one has their unique "10" values.
//#################################################

a = 10;
b = a;
b = b - 1;
console.log("Case 1", a, b, a === b);

//#################################################
// Case 2 - Mutable Values
//
// In this second case, the a is
// initialized as an reference to
// an object. After that, B is seted
// as a copy of this reference.
//
// When "a.value = 11" is executed,
// it creates a property identified 
// by "value" key into the object
// referred by a and set into this
// property the value 11.
//
// When "b.value" is executed,
// the referred object (same as a)
// detects that already has a property
// "value" and overwrite the values.
//#################################################

a = {};
b = a;
a.value = 11;
b.value = 12;
console.log("Case 2", a, b, a === b);

//#################################################
// Case 3 - Mixed
//
// This third case sets "a" as 10 and "b" as
// a reference to an object.
//
// This object reffered by "b" receives 
// a property callend value and initialized as 10.
//
// During checkup, we note that a and b 
// are different, but a and b.value are the same.
// It happens because 10 is an immutable value, even
// when it is defined inside of a mutable variable.
//#################################################

a = 10;
b = {};
b.value = 10;
console.log("Case 3", a, b, a === b, a === b.value);