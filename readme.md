Test if any _n_ collections have the same members.

[![npm install same-members](https://nodei.co/npm/same-members.png?mini=true)](https://nodei.co/npm/same-members/)

```js
import same as 'same-members';

same([2,1], [1,2]); //true
same([1,2,3], [1,3,2], [2,1,3]); //true
same([1,2,3], [1,2]); //false
same([1,2], new Set([2,1])); //true
same(new Set([1,2]), new Set([2,1])); //true
same(new Map([[1,1], [2,2]]), new Set([2,1])); //true
```