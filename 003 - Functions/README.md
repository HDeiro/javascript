## Functions on JavaScript

A function is a block of code designed to perform a particular task. It may be called when something invokes it (W3 Schools definition).

The functions may receive parameters. This parameters may be primitive values or non-primitive references (even other functions).

The functions may return a value through the usage of ```return``` keyword. If it does not uses it, it'll "return" undefined by default.

In JavaScript a function may be declared as:

- **Declared Function**: A declared function has a "name" that is used to call it.

    ```javascript
    function myFunction() {
        //...
    }
    ```

- **Anonymous Function**: A function that does not have an identifier. It may referred as callback or something similar.

    ```javascript
    function() {
        //...
    }
    ```

- **Referred Function**: A function that does not have an identifier but it's directly asigned to a variable or constant.

    ```javascript
    let myFunction = function() {
        //...
    }
    ```
- **Arrow Function**: Introduced on EcmaScript 6, the Arrow Function allows to declare variables using less code. But, this is not the only difference related to arrow functions. It also does not have a scope itself, it may use the parent scope. Other difference is that single-line-arrow-functions may ignore the ```return``` keyword to return values.

    ```javascript
    let myFunction = () => {};
    ```

    The arrow functions may be declared/called like:

    - No parameter
        ```javascript
        let myFunction = () => {};
        myFunction();
        ```
    - Ghost parameter (forces a parameter instead of ```()```, but it's undefined)
        ```javascript
        let myFunction = _ => {};
        myFunction();
        ```
    - One parameter
        ```javascript
        let myFunction = (a) => {};
        myFunction(20);

        //OR

        let myFunction = a => {};
        myFunction(20);
        ```
    - Two or more parameters
        ```javascript
        let myFunction = (a, b) => {};
        myFunction(10, 20);
        ```

### Function and Arrow Function comparison

- When using function the internal function shall have it's own scope. So, to refer the parent scope may be necessary to create a reference to parent's this or pass it as parameter.
    ```javascript
    function Counter() {
        var self = this;
        self.counter = 0;

        setInterval(function increase(){
            console.log(self.counter++);
        }, 1000)
    }

    // OR

    function Counter() {
        this.counter = 0;

        setInterval(function increase(){
            console.log(this.counter++);
        }.bind(this), 1000)
    }
    ```
- When using arrow function, the function does not have it own scope (this). In this cases, it's possible to refer to parent scope as this. 

    For some JavaScript libraries and frameworks (as React, for example), this approach may reduce a lot of code.

    ```javascript
    function Counter() {
        this.counter = 0;
        setInterval(() => console.log(this.counter++), 1000)
    }
    ```
            