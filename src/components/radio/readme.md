# radio单选框实现原理

1.首先将 input 元素 “隐藏” 起来；
    * 可以使用  visibility: hidden; opacity: 0;来实现
    * 也可以使用 display:none;来实现
    * 或者使用 position:absolute; left:-9999px;来实现，都是可以的
2.然后利用 label 标签的特性，在点击时将 input 元素选中或取消选中。
3.i 元素结合伪类（:before或:after）模拟单选框 radio 和多选框 checkbox 的外观。