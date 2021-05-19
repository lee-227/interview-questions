## IIFE

```js
var b = 10;
(function b() {
    b = 20;
    console.log(b); // [Function b]
    console.log(window.b); // 10，不是20
})();
```
```js
var fn = function a(){
  a = 10;
  console.log(a); // [Function a]
};
console.log(a) // 报错 a is not define
fn()
```

1. 函数表达式与函数声明不同，函数名只在该函数内部有效，并且此绑定是常量绑定。
2. 对于一个常量进行赋值，在 strict 模式下会报错，非 strict 模式下静默失败。
3. IIFE中的函数是函数表达式，而不是函数声明。

```js
var b = 10;
(function b() {
    b = 20;
    console.log(b); // 20
    console.log(window.b); // 10
    var b = 5 // 会再次作用域内变量提升 到作用域顶部
    console.log(b) // 5
})();
```