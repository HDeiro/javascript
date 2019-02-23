## Callbacks

The usage of asynchronous technique is very important for a sort of reasons, like performance, as an example. But, considering that you can not predict (but can presume) when an asynchronous function will be solved, you can use some strategies in order to deal with it.

The first one (and the oldest) is the callback.

A callback is basically a function passed as parameter to an asynchronous context that will be invoked when the asynchronous function is solved.

#### The "Hadouken" (Callback Hell)

A big problem on asynchronou handling is that you can normally deal with a sort of functions and call backs of callbacks, in a way that you code can be similar to the image bellow.

![The callback hell](https://github.com/HDeiro/javascript/blob/v2/011%20-%20Callbacks/assets/img/hadouken.jpeg?raw=true)

This is not good because makes your code harder to understand and maintain. But, there are new options to deal with asynchronous handling now, and the'll be explained in next session.