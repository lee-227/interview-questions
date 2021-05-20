```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x) // undefined
console.log(b.x) // {n:2}
```
1. a跟b都引用了{n:1}
2. .运算高于赋值运算 所以 {n:1,x:undefined}
3. 赋值运算从右往左 首先a指向新对象{n:2}
4. a.x赋值时并不会重新对a进行解析此时的a依旧指向最原始的对象{n:1,x:unbdefined}
赋值后 旧对象 {n:1,x:{n:2}}
5. 输出 a.x = undefined  b.x={n:2}