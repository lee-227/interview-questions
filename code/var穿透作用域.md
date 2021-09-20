```js
var name = 'Tom';
(function() {
    console.info('name', name);//undefined
    console.info('typeof name', typeof name);//undefined
    if (typeof name == 'undefined') {
        var name = 'Jack'; // IIFE内的var穿透了块作用域，name被提升至if()之前，且此时name为undefined。
        console.log('Goodbye ' + name);//goodbye jack
    } else {
        console.log('Hello ' + name);
    }
})();
```