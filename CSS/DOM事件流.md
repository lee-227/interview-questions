## DOM 事件
- 是指用户发出指令，到浏览器做出对应的响应的整个过程称为一个事件。

## 事件绑定
1. onEvent 方式，在标签中通过 onClick 绑定，使用 js 获取 dom，使用 dom.onClick 绑定
   1. 基于代码的使用性以及维护性，不建议使用这种绑定事件的方式
   2. 这种绑定方式一个事件只能绑定一个处理函数，重复绑定会被覆盖掉。
   3. 兼容性好
2. addEventListener 绑定事件
   1. 可以重复绑定事件
   2. 可以控制事件调用时机
   3. 兼容性不如第一种

## DOM 事件流

1. 事件模型分为两种
   1. 事件捕获
   2. 事件冒泡
2. 事件流
   1. 捕获阶段：事件从window对象自上而下向目标对象传播的阶段
   2. 目标阶段：真正的目标对象处理事件的阶段
   3. 冒泡阶段：事件从目标阶段冒泡至window对象的过程
3. 事件委托
   1. 由于事件在冒泡阶段时会从目标对象冒泡到父级对象，因此可以把子节点的监听事件绑定到父级元素上，由父级元素监听通一处理子元素的事件，这种处理方式叫做事件委托。
   2. 通过事件委托可以减少内存消耗，不必在每一个子元素上添加监听事件，提高了网页性能。