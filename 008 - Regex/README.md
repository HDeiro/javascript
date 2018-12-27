# Regular Expressions (RegEx)

RegEx represents or defines patterns to be followeds. They can be really useful when is necessary to format or validate something.

JavaScript provides two ways to create regular expressions:

- Directly
```javascript
let regex = /myRegex/
```
- Object Oriented
```javascript
let regex = new RegExp("myRegex");
```

Example of Regex:

```javascript
let regex = /\(71\) 99999-9999/
```

Note that in the example the special character ```"("``` has been scaped.

### Regex Intervals

It's possible to define intervals of values for Regular Expressions as follows:

| Interval | Meaning |
| -- | -- | 
| [a-z] | Lower case letters from a to z |
| [A-Z] | Upper case letters from A to Z |
| [0-9] | Numbers from 0 to 9 |
| [**char**] | Any other caracters (e.g: ?, !, . etc). But remember, the special ones may be scaped |

It's possible to combine these intervals in order to define a pattern. As an example, if we have a regular expression like ```/[0-9a-zA-Z]/``` will mean that any number or letter (with lower or upper case) will be valid.

### Regex Interval Shortcuts

When we work with complex regex the maintenance may be a problem. In order to define it some metacharacters has been defined to represent elements.

| Interval | Meaning
| -- | --  
| \w | Any letter (lower or upper case), number or underscore
| \W | Anything that is not a letter (lower or upper case), number or underscore
| \d | Digit from 0 to 9
| \D | Non-digit character
| \s | Whitespace character
| \S | Non-whitespace character
| \b | Match at the beginning/end of a word
| \B | Match that is not at the beginning/end of a word
| \0 | NUL character
| \n | Line character

### Regex Quantifiers & Delimiters

It's possible to apply quantifiers/delimiters in order to reduce the regular expression.

| Quantifier | Meaning
| -- | --
| n+ | At least one "n"
| n* | Contains 0 or more "n"
| n? | Contains 0 or one "n"
| n{X} | Contains a sequence of X "n"
| n{X,Y} | Contains a sequence of X to Y "n"
| n{X,} | Contains a sequence that has at least X "n"
| n$ | Matches "n" at the end of it
| ^n | Matches "n" at the beginning of it
| ?=n | Matches anything that is followed by "n"
| ?!n | Matches anything that is not followed by "n"