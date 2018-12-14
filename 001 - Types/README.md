## Types on JavaScript

JavaScript has dynamic typing. It means that the type of a variable is inferred by the value it holds.

The primitive types of the language are:
 - Number
 - String
 - Boolean
 - Null
 - Undefined
 - Symbol

Besides the primitive, there are other type of variables. They refer to a sort of things but are interpreted as objects.
 - Objects
 - Functions
 - Arrays
 - RegEx (Regular Expressions)

#### Mutable and Immutable types
It's important to know that primitive types are immutable and the non-primitive are mutable. Immutable types shall have always the same value, but the mutable may change depending on context.

As an example, we can check the it by comparison. If we check ```10 === 10``` it will result as true. But, if we check ```{} == {}``` it returns as false, because the objects (```{}```) dos not reffer to the same object.

Anoter way to check the mutability of an object reference is:

```javascript
var a = {};
var b = a;
a.value = 10;
console.log(b);
```

In the example above, ```b``` will also have the property ```value``` even if you haven't declared it. It happens because ```b``` refers to the same object as ```a```.

#### Null VS Undefined

Even if they look the same, the **Null** and the **Undefined** are completely different.

The **Undefined** represents an unasigned value ("nothing") that is seted by default in the variables.

The **Null** is an empty object reference (Null Reference). 