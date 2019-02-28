let array = [1, 2, 3, 4, 5];
let output = null;

// [Mutable] Pushes a value to the end of the array
output = array.push(6, 7, 8, "String");
console.log("Function Push = ", output, array); 

// [Mutable] Remove the last index of the array
output = array.pop();
console.log("Function Pop = ", output, array);

// [Mutable] Unshift all values to add a new one on the start of the array
output = array.unshift("String", -1, 0);
console.log("\nFunction Unshift = ", output, array); 

// [Mutable] Shift all values to remove one from the beginning of the array
output = array.shift();
console.log("Function shift = ", output, array); 

// [Mutable] Splice the array
output = array.splice(0, 1); //Remove the first element
console.log("\nFunction splice (to remove element) = ", output, array);

output = array.splice(3, 0, "Added Element 1", "Added Element 2"); //Does not remove any element, but inject some new values in that position
console.log("Function splice (to add element) = ", output, array);

output = array.splice(3, 2, 100); //Remove 2 elements and inject a new value
console.log("Function splice (to remove and add element) = ", output, array);

// [Mutable] Reversing the array
output = array.reverse();
console.log("\nFunction reverse = ", output, array);

// [Immutable] Parsing the array to String
output = array.toString();
console.log("\nFunction toString = ", output, array);

// [Immutable] Concat two arrays
output = array.concat([9, 10, 11], [12, 13, 14], 15);
console.log("\nFunction concat = ", output, array);

// [Immutable] Check the size of the array
output = array.length;
console.log("\nArray Lenght = ", output, array);

// [Immutable] Check the position of an element
output = array.indexOf(100);
console.log("\nFunction IndexOf (Success case) = ", output, array);

output = array.indexOf(100000);
console.log("Function IndexOf (Failure case) = ", output, array);

// [Immutable] Join the elements of the array
output = array.join();
console.log("\nFunction join (default separator)", output, array);

output = array.join(" _JS_ ");
console.log("Function join (custom separator)", output, array);

// [Immutable] Filter elements of the array
output = array.filter(element => !(element % 2)); //Pair elements only
console.log("\n[Iterated] Function filter = ", output, array);

// [Immutable] Maps an array
output = array.map(element => element ** 2); // element * element
console.log("[Iterated] Function map = ", output, array);

// [Immutable] Reduces an array
output = array.reduce((old, current) => old + current, 0); //Sum all values
console.log("[Iterated] Function reduce = ", output, array);

// [Immutable] Finds the first element in the array that attends to the condition (you may use findIndex to get the index of the element instead of the value)
output = array.find(element => element > 99);
console.log("[Iterated] Function find = ", output, array);

// [Immutable] Checks if some of the elements attend to the condition
output = array.some(element => !(element % 7)); // Check if some element are multiple of 7
console.log("[Iterated] Function some = ", output, array);

// [Immutable] Checks if all the elements attend to the condition
output = array.every(element => !(element % 7)); // Check if every element are multiple of 7
console.log("[Iterated] Function every = ", output, array);

// [Immutable] Iterate over the elements
console.log("[Iterated] Function forEach [");
array.forEach(console.log);
console.log("]");

// [Mutable] Sort the array
output = array.sort();
console.log("[Iterated] Function sort", output, array); // Based on Unicode

output = array.sort((a, b) => {
    if(a < b)
        return 1;  // b came first
    else if (a > b)
        return -1; // a came first
    else
        return 0;  // Keep the order
});
console.log("[Iterated] Function sort (Using comparator)", output, array); // Based on Unicode

// [Mutable] fill the values of the array
output = array.fill(10);
console.log("\nFunction fill (all)", output, array);

output = array.fill(8, 3);
console.log("Function fill (all, from)", output, array);

output = array.fill(5, 5, 8);
console.log("Function fill (all, from, to)", output, array);