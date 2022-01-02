# RunJavaScript - javascriptをコード内で実行
English page is [here](https://github.com/beezza8/runjavascript)

## <font color="Blue">マイナーアップデート！</font>
* **runFile関数を追加しました**  
使い方:  
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

//結果 : hello
```
## インストール方法
npm:
```shell
$ npm install runjavascript
```
yarn:
```shell
$ yarn add runjavascript
```
## 例
javascript:
```javascript
const runjavascript = require("runjavascript");

//run javascript code
console.log(runjavascript.run('console.log("hello!")'));

//結果 : hello!
```