// Utilitary function
function awaitRandom(callback) {
    let min = 0;
    let max = 5;
    //Generate Random number between 0 - 5
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    let awaitTime = rand * 1000;
    console.log(`Wait for ${rand} seconds`);
    setTimeout(callback, awaitTime);
}

// Callback function
function callbackFunction() {
    console.log("########### FINISHED ###########");
}

// Start
awaitRandom(callbackFunction);