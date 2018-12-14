## Similar & Equals

It's really commom the need to check if an value is equal to other one. But, considering that JavaScript is a language with dynamic typing, we may have to be careful about some value-checking.

In JavaScript we have two ways to check the equality, the ```==``` (Similar, also known as Loose Equality) and ```===``` (Equal, also known as Strict Equality). The Similar symbol checks about the value equality. When we use the Equal symbol, we check the value and the type equality.

The unequal follows the same rules. So, whe have ```!=``` and ```!==```.

#### Truthy & Falsy evaluation

When a value is placed to a context where is expected a boolean (an ```if()```, as an example), it will be coerced to a boolean value.

Except for the following values, every other values will be coerced to true:

- ```false```
- ```null```
- ```undefined```
- ```0```
- ```NaN```
- ```''```
- ```document.all```

P.S: ```document.all``` are false because it has been used for browser detection a long time ago. Since EcmaScript 5, a method called ```ToBoolean()``` has been required to parse objects to the true value, but this implementation of ```document.all``` treats the object as undefined. So, the consequence is that this value is parsed to false. But don't worry, this is used only to **OLD** browsers.

#### Similar comparation
| == |true |false |0 |'' |null |undefined |NaN |Infinity |[] |{} |
| -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| true |true |false |false |false |false |false |false |false |false |false |
| false |false |true |true |true |false |false |false |false |true |false |
| 0 |false |true |true |true |false |false |false |false |true |false |
| '' |false |true |true |true |false |false |false |false |true |false |
| null |false |false |false |false |true |true |false |false |false |false |
| undefined |false |false |false |false |true |true |false |false |false |false |
| NaN |false |false |false |false |false |false |false |false |false |false |
| Infinity |false |false |false |false |false |false |false |true |false |false |
| [] |false |true |true |true |false |false |false |false |false |false |
| {} |false |false |false |false |false |false |false |false |false |false |

#### Equal comparation

| === | true | false | 0 | '' | null | undefined | NaN | Infinity | [] | {} |
| -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| true | true | false | false | false | false | false | false | false | false | false |
| false | false | true | false | false | false | false | false | false | false | false |
| 0 | false | false | true | false | false | false | false | false | false | false |
| '' | false | false | false | true | false | false | false | false | false | false |
| null | false | false | false | false | true | false | false | false | false | false |
| undefined | false | false | false | false | false | true | false | false | false | false |
| NaN | false | false | false | false | false | false | false | false | false | false |
| Infinity | false | false | false | false | false | false | false | true | false | false |
| [] | false | false | false | false | false | false | false | false | false | false |
| {} | false | false | false | false | false | false | false | false | false | false |