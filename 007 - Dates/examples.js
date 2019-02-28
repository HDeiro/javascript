let date = new Date("1992/01/29 15:00");

// Get timestamp of a date
console.log("Function getTime = ", date.getTime());

// Get timestamp of now
console.log("\nStatic function now = ", Date.now());

// Get parts of date
console.log("\nFunction getFullYear = ", date.getFullYear()); //Get Year is broken, because it has been developed thinking years until 1999. After that, it keeps increasing the year (for year 2000, it returns 100)
console.log("Function getMonth = ", date.getFullYear()); // From 0 to 11
console.log("Function getDay = ", date.getDay()); // Day of the week (0, from sunday)
console.log("Function getDate = ", date.getDate());
console.log("Function getHours = ", date.getHours());
console.log("Function getMinutes = ", date.getMinutes());
console.log("Function getSeconds = ", date.getSeconds());
console.log("Function getMilliseconds = ", date.getMilliseconds());

// Parses a string to date
console.log("\nStatic function parse = ", Date.parse("1992/01/29 15:00"));

// Parses a date to string
console.log("\nFunction toString = ", date.toString());

// Parses a date to a locale string (for a big number of dates, it's suggested to use Intl.DateTimeFormat to prevent performance issues: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
let options = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "long"
};
console.log("Function toLocaleString = ", date.toLocaleString("pt-BR", options));