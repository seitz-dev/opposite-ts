# opposite

[![npm version](https://img.shields.io/npm/v/opposite.svg)](https://www.npmjs.com/package/opposite)

A lightweight Typescript utility for managing pairs of opposite values.


## Example Usage
```ts
const pair = new Opposite<string>("good", "bad");
console.log(pair.getValue()); // returns "good"
console.log(pair.reverse().getValue()); // returns "bad"
 
const flag = "good"
console.log(pair.setState(flag === "bad").getValue()) // returns "good"
```
