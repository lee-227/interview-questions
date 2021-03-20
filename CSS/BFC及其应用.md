## BFC
- BFC 块级格式化上下文，是一种布局方式。
- 触发条件：
  1. float 的值不为 none
  2. display 的值为 block inline-block table table-cell flex 等
  3. position 的值为 absolute 或者 fixed
  4. overflow 的值不为 visible
- 布局规则：
  1. 内部的 box 会在垂直方向上一个一个排列
  2. 内部两个相邻元素的外边距会重叠
  3. 内部元素的左边界与包含块左边界相接触
  4. 浮动元素与BFC元素不会重叠
  5. 计算高度时 内部浮动子元素的高度也会计算
  6. BFC 是一个独立的容器，内部子元素不会影响外部元素
- 应用：
  1. 防止 margin 重叠
  2. 子元素浮动时父元素高度坍塌问题
  3. 自适应两栏布局