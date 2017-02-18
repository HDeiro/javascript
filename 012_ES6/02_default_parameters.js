function defaultParameters(a, b = 'default') {
    console.log(a, b);
}

defaultParameters(1, 2);
defaultParameters(1);
defaultParameters();