/**
 * All JavaScript String Methods are IMMUTABLE. So, they won't change the
 * value of the string itself, but will returna  new string. In case that
 * you need to change the real value of the string you may want to override
 * this string.
 */

let string = "JavaScript rules";

console.log("\nStarting String = ", string);

// Capture the size of the string
console.log("Function Lenght = ", string.length);

// Capture a substring based on initial and final index (this final index is optional)
console.log("\nFunction Substring (Initial Index) = ", string.substring(11));
console.log("Function Substring (Initial Index, Final Index) = ",string.substring(1, 4)); //[initial position, final position]

// Capture a substring based on a position and the number of characters to extract (this number of characters is optional)
console.log("\nFunction Substr (Initial Index) = ", string.substr(11));
console.log("Function Substr (Initial Index, Quantity of Characters) = ", string.substr(1, 4)); //[initial position, quantity of characters]

// Capture the index of a substring (in case of multiple ocurrences, returns only the first one)
console.log("\nFunction IndexOf (Miss) = ", string.indexOf("MissValue"));
console.log("Function IndexOf = ", string.indexOf("a"));
console.log("Function IndexOf (subst, startFrom) = ", string.indexOf("a", 2));

// Capture the last index of a substring
console.log("\nFunction lastIndexOf (Miss) = ", string.lastIndexOf("MissValue"));
console.log("Function lastIndexOf = ", string.lastIndexOf("a"));
console.log("Function lastIndexOf (subst, startFrom) = ", string.lastIndexOf("a", 2)); // Search backwards

// Set a string to uppercase or lowercase
console.log("\nFunction toLowerCase = ", string.toLowerCase());
console.log("Function toUpperCase = ", string.toUpperCase());
console.log("Function toLocaleLowerCase = ", string.toLocaleLowerCase()); //Lowers the case according to language settings on browser in order to does not conflict with regular unicode case
console.log("Function toLocaleUpperCase = ", string.toLocaleUpperCase()); //Uppers the case according to language settings on browser in order to does not conflict with regular unicode case

// Checks if a string starts or ends with an specific substring
console.log("\nFunction startsWith = ", string.startsWith("Java"));
console.log("Function endsWith = ", string.endsWith("es"));

// Splits a string based on a substring
console.log("\nFunction split = ", string.split("a"));

// Replaces part of the string
console.log("\nFunction split = ", string.replace("rules", "rules a lot"));

// Repeats the string with X new copies of it
console.log("\nFunction repeat = ", string.repeat(3));

// Checks if a string includes other
console.log("\nFunction includes (substring) = ", string.includes("JavaScript"));
console.log("Function includes (substring, initialPosition) = ", string.includes("JavaScript", 5));

// Concat strings based on variadic parameter
console.log("\nFunction Concat = ", string.concat(" ", "a ", "lot!"));

// Returns a char in a specific position of the string
console.log("\nFunction charAt = ", string.charAt(4), string[4]); // EXACT same effect as string[4]

// Checks if the string matches with an Regular Expression
console.log("\nFunction Match (True case) = ", string.match(/^[A-Z]/));
console.log("Function Match (False case) = ", string.match(/[A-Z]$/));

// Search the position of a value (regex or string that may be parsed as regex)
console.log("\nFunction search (True case) = ", string.search(/Script/));
console.log("Function search (False case) = ", string.search(/script/));

// Slices the string, removed part between position passed as parameter
console.log("\nFunction slice (initial) = ", string.slice(11));
console.log("Function slice (inicial, final) = ", string.slice(3, 6));

// Removes all whitespaces from start and end of string
console.log("\nFunction trim = ", string.trim());

// Padding strings (EcmaScript 8)
console.log("\nFunction padStart [")
    console.log("10".padStart(10, "0"));
    console.log("10333".padStart(10, "0"));
console.log("]");

console.log("\nFunction padEnd [")
    console.log("10".padEnd(10, "0"));
    console.log("10333".padEnd(10, "0"));
console.log("]");

console.log("\nFinishing String = ", string);