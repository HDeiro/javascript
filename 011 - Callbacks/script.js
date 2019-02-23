// Utilitary function
function awaitRandom(callback) {
    let min = 0;
    let max = 5;
    //Generate Random number between 5 - 10
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    var awaitTime = rand * 1000;
    console.log(`Wait for ${rand} seconds`);
    setTimeout(callback, rand * 1000);
}

// Callback function
function callbackFunction() {
    console.log("########### FINISHED ###########");
}

// Start
awaitRandom(callbackFunction);