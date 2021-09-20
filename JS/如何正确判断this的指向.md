## 如何正确判断this的指向？

1. 全局环境中的 this
   1. 浏览器环境：无论是否在严格模式下，在全局执行环境中（在任何函数体外部）this 都指向全局对象 window;
   2. node 环境：无论是否在严格模式下，在全局执行环境中（在任何函数体外部），this 都是空对象 {};
2. new 绑定
   1. 构造函数返回function，object 则 this 指向返回的对象
   2. 构造函数中没有返回 function 或者是 object，那么 this 指向这个新对象。
3. call，apply，bind 显示绑定， 指向绑定的值
   1. 传入的第一个参数值是 undefined或者 null，严格模式下 this 的值为传入的值 null /undefined。
   2. 非严格模式下，实际应用的默认绑定规则，this 指向全局对象(node环境为global，浏览器环境为window)
4. 隐式绑定 函数的调用是在某个对象上触发的，即调用位置上存在上下文对象。典型的隐式调用为: xxx.fn()
5. 箭头函数没有自己的this，继承外层上下文绑定的this。