// Brazilian Telephone regex
let regex = /^((\((?=\d{2}\))\d{2}?(?<=\(\d{2})\))?|\d{2}?)\s?\d?\d{4}-\d{4}$/; //E.g: (71) 98765-4321

console.log(regex.test("(99)99999-9999"));
console.log(regex.test("(99) 99999-9999"));
console.log(regex.test("(99) 9999-9999"));
console.log(regex.test("99) 9999-9999"));
console.log(regex.test("(99 9999-9999"));
console.log(regex.test("99 9999-9999"));
console.log(regex.test("99999-9999"));
console.log(regex.test("9999-9999"));
console.log(regex.test("99999999"));
console.log(regex.test("999-9999"));