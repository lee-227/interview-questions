## flex:1 将项目等比缩放，平分空间
- flex是flex-grow，flex-shrink,flex-basis的缩写，三个分别的默认为0 1 auto
- flex-grow属性定义项目的放大比例默认为0不放大
- flex-shrink属性定义项目的缩小比例默认为1空间不足该项目会缩小
- flex-basis定义分配多于空间之前项目占据的主轴空间，浏览器根据这个属性计算是否有多于空间，默认值为auto即项目本来的大小。
  
- flex:1 === flex-grow:1 flex-shirink:1 flex-basis:0%
- flex:2 === flex-grow:2 flex-shirink:1 flex-basis:0%
- flex:none === flex-grow:0 flex-shirink:0 flex-basis:auto
- flex:auto === flex-grow:1 flex-shirink:1 flex-basis:auto
- flex:0% === flex-grow:1 flex-shirink:1 flex-basis:0%
- flex:100px === flex-grow:1 flex-shirink:1 flex-basis:100px 
- flex:2 3 === flex-grow:2 flex-shirink:3 flex-basis:0% 
  
- flex-grow
```html
<div id="content">
    <div class="box" style="background-color:red;">A</div>
    <div class="box" style="background-color:lightblue;">B</div>
    <div class="box" style="background-color:yellow;">C</div>
</div>
```
```css
#content {
  display: flex;
  width: 500px;
}

.box {
 flex-basis:100px;
 flex-grow:1
}
/* width = 子元素width + (父元素总宽度 - 所有子元素basis总宽度)*该元素flex-grow/所有子元素flex-grow和 */
/* width = 100 + (500 - 100*3)*1/3 */
```

- flex-grow
```html
<div id="content">
    <div class="box" style="background-color:red;">A</div>
    <div class="box" style="background-color:lightblue;">B</div>
    <div class="box" style="background-color:yellow;">C</div>
</div>
```
```css
#content {
  display: flex;
  width: 500px;
}
.box {
 flex-basis:200px;
 flex-shrink:1
}
/* 超出宽度 = 所有子元素basis总宽度 - 父元素总宽度= 100 */
/* width = 该元素shirink/所有子元素flex-shirink和*超出宽度 */
/* width = 1/3*100 */
```