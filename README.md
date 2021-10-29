![Awesome JavaScript in one line of code written above a picture of Mt. Fuji's peak](ajsioloc.png)
# Awesome javascript in one line of code

A collection of utilities and helpers following the principle: Keep it as simple as possible in one line of code. 

As long as we area dealing with JavaScript, the library assumes that the user provides valid input. No type checking or other verifications of the arguments are part of the functions.
The library tires to use the simplest and most performant code possible. To keep the functions as simple as possible they will be reduced to the core functionality: "one function should have one specific functionality only".


New functions will be added every time there is an article being published.

All functions are written in `ESNext` `esmodules` (`./src`)  and available as 
-`umd` (`./dist/index.js`) with the `onelinecode` namespace (e.g. window.onlinecode)
-`commonjs` (`./dist/index.cjs.js`) 
-`esm` (`./dist/index.esm.js`) 

## Available function 
### Array

#### `isEmpty`
Returns a boolean false if the array is not empty or a boolean true if the array is empty.

#### `highestNumber`
Returns the highest coerced numerical numerical item of the array.
#### `lowestNumber`
Returns the lowest numerical item of the array.
#### `removeDuplicates`
Returns a copy of the array.
Removes duplicate entries, keep in mind that it works only for entries with primitive values (string, number, bigint, boolean, undefined, symbol, and null). Preserves the order of the entries.
#### `shallowClone``
Creates a shallow-copied clone of the provided array. Since it's a shallow copy, nested objects or arrays will be copied by reference, not duplicated.

#### `occurrenceMap`
Returns an object where the keys are the array entries and the values the number of their occurrences.

## Installation
``` 
$ npm install @onelinecode
```

```
$ yarn add @onelinecode
```
## Usage
For example, you want to `shallowClone` an `array`:
```JavaScript
import { shallowClone } from '@onelinecode/onelinecode/array';
let array = [1];
let arrayClone = shallowClone(array);
```


## Testing
The library has `100% code coverage` with `ava` and passes the build on (travis-ci.com)]|

## Contribution

If you are interested in discussion a specific function, please see the corresponding article from (the series on dev.to)[https://dev.to/martinkr/series/15146].


Please don't hesitate to comment, give feedback. I appreciate every input or comment. We can and should learn from each others opinion and knowledge. Please stick to a respectful style of discussion and read the (code of conduct)[]  like the articles or star the repository.



## Tech Stack 
- ava: 3.15.0
- c8: 7.10.0
- esm: 3.2.25
- rollup: 2.58.



## License

Licensed under the MIT license.
MIT - http://www.opensource.org/licenses/mit-license.php
