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

#### Not a Number

Not a Number (NaN) is a value that represents a value that is not a number. The weirdest part of this is that NaN is evaluated as number. It happens when the result is an undefined numeric value (Following to IEEE-754, that talks about floating point data).

TL;DR: NaN represents a number that is outside of the EcmaScript domain definition for numbers.

A NaN shall be returned when:

- Division of zero by zero
- Dividing an infinity by an infinity
- Multiplication of an infinity by a zero
- Any operation in which NaN is an operand
- Converting a non-numeric string or undefined into a number

NaN is unordered. You may not check if a value is equals, greater or less than any other number (including NaN, because a NaN may not be NaN for the same reason of other NaN, as an example)

Boolean values are not NaN. Thay may be coerced to 1 (true) or 0 (false) because of JavaScript Truthy Falsy evaluation (I'll talk about it later in class 004).
