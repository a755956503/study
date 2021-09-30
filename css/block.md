# 坍塌
https://www.cnblogs.com/reyinever/p/10629982.html

在两个盒子嵌套时，内部的盒子设置的margin-top会加到外边的盒子上，导致内部的盒子margin-top设置失败，解决方法如下：
（1）外部盒子设置一个边框

（2）外部盒子设置overflow:hidden

（3）使用伪元素类：

.clearfix:before{

content:””;

display:table;

}

