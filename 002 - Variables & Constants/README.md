### Variables & Constants in JavaScript

Variables and constants are indentifiers that may represent a value or a reference. The main diference between them is that the variables may change the value/reference holded during the time, but the constant no. A value or reference stored in a constant will be there while that constant exists.

In JavaScript we have 3 ways to declare a variable:
- **Global Variables**: defined without any identifier, those variables can be accessed in anywhere, because they were stored in the major scope available (window for browsers and global for NodeJS).

    ```javascript
    a = 10
    ```

- **Hoisted Variables**: this type of variable demands the key ```var``` to be used. It exists only on the execution scope where it has been declared (a function, as an example). The major problem of this approach is because of the "hoisting" behavior (will be better explained soon), that hoists all declarations to the top of it's scope, what may cause unexpected effects.

    ```javascript
    var a = 10
    ```

- **Block Variables**: this type of variable has been released on EcmaScript 6 and it's kind of similar to the previous type, but they are not hoisted like the other type. Block variables will only exists inside of the scope where it has been declared (even if it's an ```if()``` block or something like that).
    
    ```javascript
    let a = 10
    ```

The constant has a similar syntax to the variables, but instead of ```var``` or ```let``` it uses the keyword ```const```. But it's really important to understand that only the stored value or reference will be immutable. As an example, if an object has been declared as a constant, the reference may be constant, but the object don't. So, the properties in this object can be changed by the time. In order to stores an really immutable object, you may want to check out the ```Object.freeze()``` method.


```javascript
const a = 10
```
            

```javascript
const a = {};
a.property = 10;
```

### Hoisting

JavaScript tries to not break an application when it find's an error. In order to accomplish this, a lot of treatments are done. The declaration hoisting is one of them.

On declaration hoisting the declaration of methods and variables are hoisted to the top of it's scope.

As an example, let's say that we have a function like:

```javascript
function hoistingExample(list) {
    for (var i = 0; i < list.length; i++)
        console.log(list[i]);
}
```
This ```hoistingExample()``` will be parsed like:

```javascript
function hoistingExample(list) {
    var i;
    for (i = 0; i < list.length; i++)
        console.log(list[i]);
}
```

The major problem of it is that this ```i``` keep existing outside of the for-loop. If you place a ```console.log(i)``` after the loop you may check the last value of ```i```.

```javascript
function hoistingExample(list) {
    var i;
    for (i = 0; i < list.length; i++)
        console.log(list[i]);
    console.log(i);
}
```

One other way to prevent the hoisting effect is using the ```'use strict'``` in the beginning of the script. This way, some "weird" behaviors of JavaScript will be prevented (things like deletion of objects/variables/functions, overwrites on read-only properties and a lot of other stuff).