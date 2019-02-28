// Utilitary function
function awaitRandom() {
    let min = 0;
    let max = 5;
    //Generate Random number between 5 - 10
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    let awaitTime = rand * 1000;
    // Create promise
    return new Promise((resolve, reject) => {
        console.log(`Wait for ${rand} seconds`);

        setTimeout(function() {
            resolve();
        }, awaitTime);
    });
}

Promise.all([awaitRandom(), awaitRandom()]).then(_ => console.log("All promises executed"));