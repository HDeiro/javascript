## Promise

Promise is an object used for asynchronous processing. It represents a value that may be available in the future or never.

The syntax of promises receives two callbacks, ```resolve``` and ```reject``` that may be resolved inside of the scope of the promise. The ```resolve``` must be called when everything is successfully executed. The ```reject``` must be called when something went wrong.

#### Promise states

A Promise will **always** be in one of the following states:

- Pending: Initial state. Neither resolved or rejected.
- Fulfilled: Finished with success.
- Rejected: Finished with failure.
- Setled: Executed, with success or failure.

![Promise schema](https://github.com/HDeiro/javascript/blob/v2/012%20-%20Promises/assets/img/Promises.jpg?raw=true)

#### Promise API

The Promise API provide 4 methods:

- Resolve: Method to use when Promise is sucessfully executed, passing from pending to fulfilled and after to setled state.
- Reject: Method to use when the Promise has an error, passing form pending to rejected and after to setled state.
- All: Method to use when you want a promise to be executed after the execution of all promises (all in setled state).
- Race: Method to execute after the first promise in the list change to setled state.