// Utilitary function
let sleep = async ms => new Promise(resolve => setTimeout(_ => resolve(`Waited for ${ms}ms`), ms));

let awaitRandom = async _ => {
    let min = 0;
    let max = 5;
    //Generate Random number between 5 - 10
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    let awaitTime = rand * 1000;
    // Create promise
    return await sleep(awaitTime);
}

// Start
awaitRandom().then(console.log);