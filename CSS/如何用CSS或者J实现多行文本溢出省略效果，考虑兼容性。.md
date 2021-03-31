## 如何用CSS或者J实现多行文本溢出省略效果，考虑兼容性。

1. 单行
```css
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrop;
```

2. 多行不兼容
```css
display: -webkit-box; 
-webkit-box-orient: vertical; 
-webkit-line-clamp: 3;
overflow: hidden;
```

3. JS多行
```js
let str = '文本。。。。。。。'
let el = document.getElementById('view')
let n = el.offsetHeight
for(let i = 0; i < s.length; i++){
    el.innerHTML = str.substr(0,i)
    if(n < el.scrollHeight){
        el.style.overflow = hidden
        el.innerHTML = str.substr(0,i-3) + '...'
        break
    }
}
```