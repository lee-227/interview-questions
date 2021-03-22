## 分析比较opacity：0、visibility：hidden、display：none的优劣和适用场景

- 结构：
  - display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击。
  - visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击。
  - opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击。
- 继承：
  - display: none是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。
  - visibility: hidden是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。
  - opacity: 0：是继承属性，子孙节点消失由于继承了opacity: 0，不能通过设置opacity: 1让子孙节点显式。
- 性能：
  - displaynone : 修改元素会造成文档回流，性能消耗较大。
  - visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少。
  - opacity: 0 ： 修改元素会造成重绘，性能消耗较少。
