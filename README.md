# RunJavaScript -run javascript code in your code!
日本語ページは[こちら](https://github.com/beezza8/runjavascript/blob/main/README.JA.md)

## <font color="Blue">Minor Update!</font>
* **added runFile function**  
usage:  
hello.js:  
```js
function hello() {
    console.log("hello");
}

hello();
```
index.js
```js
const runjavascript = require("runjavascript");
console.log(runjavascript.runFile("hello.js"));

//resualt : hello
```
## How to install
npm:
```shell
$ npm install runjavascript
```
yarn:
```shell
$ yarn add runjavascript
```
## Example
javascript:
```javascript
const runjavascript = require("runjavascript");

//run javascript code
console.log(runjavascript.run('console.log("hello!")'));

//resualt : hello!
```