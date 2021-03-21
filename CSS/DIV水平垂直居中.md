## DIV水平垂直居中？

```html
<div class="parent">
  <div class="child"></div>
</div>
```

1. 通用
```css
div.parent{
    display:flex;
    justify-content:center;
    align-items:center;
}
```

2. auto
```css
div.parent{
    display:flex;
}
/* 需要高度 */
div.child{
  margin:auto;
}
```

3. gird
```css
div.parent{
    display:grid;
}
div.child{
    justify-self:center;
    align-self:center;
}
```

4. position
```css
div.parent{
    position:relative;
}
div.child{
    positon:absolute;
    top:50%;
    left:50%;
    transfrom:translate(-50%,-50%)
}

/* 子元素需要固定高宽 */
div.child{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto
}
```

5. js
```js
parent.clientWidth
parent.clientHeight
child.offsetWidth
child.offsetHeight
child.style.position = 'absolute'
child.style.left = (parent.clientWidth - child.offsetWidth)/2
child.style.top = (parent.clientHeight- child.offsetHeight)/2
```