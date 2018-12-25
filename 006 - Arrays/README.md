## Arrays in JavaScript

Like many other languages, JavaScript supports arrays. The language provides a very rich API to deal with arrays.

There are two ways to declare an array in JavaScript:

- Bracket-Syntax (most commom)
```javascript
let array = [];
```

- OO-Syntax
```javascript
let array = new Array();
```

- Static-Syntax
```javascript
let array = Array(); //You may specify the initial lenght as parameter to Array()
```

- Of-Syntax
```javascript
let array = Array.of();
```


One important thing is that different than other languages, it's not necessary to set a size to arrays in JavaScript. It will grow dinamically.

Other very important thing to know about arrays is that they are considerred objects by JavaScript parser. So, it's something like "an object with numeric properties". Based on this, we may see some arrays with string properties (eg. ```myArray["myIndex"]```), but, in that case, they may not be iterated.

You may quickly check this by:

```javascript
let array = [];
array.push(1, 2, 3, 4, 5);
array["index"] = "other";
array.forEach(console.log);
console.log(array["index"]); // Array->Object syntax
console.log(array.index); // Object->Array syntax
```
