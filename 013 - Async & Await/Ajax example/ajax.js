let fetchJson = async printHere => {
    const response = await fetch("data.json");
    const json = await response.json();
    printHere && console.log("Printed inside", json);
    return json;
}

// Print later because "true" parameter says to print asynchronously
fetchJson(true);

setTimeout(() => {
    // Print the promise, because it has not been resolved at the moment of the print
    console.log("Printed outside", fetchJson(false));
}, 1000);