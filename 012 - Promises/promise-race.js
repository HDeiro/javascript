// Utilitary function
function awaitRandom() {
    let min = 0;
    let max = 5;
    //Generate Random number between 5 - 10
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    var awaitTime = rand * 1000;
    // Create promise
    return new Promise((resolve, reject) => {
        console.log(`[Function ${rand}] Wait for ${rand} seconds`);

        setTimeout(function() {
            resolve(rand);
        }, rand * 1000);
    });
}

// Start 
Promise.race([awaitRandom(), awaitRandom()]).then(functionId => {
    console.log(`Function ${functionId} executed first`);
});