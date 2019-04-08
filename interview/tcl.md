# TCL智能家居
## 一

### java几种数据类型，在32位系统下各占多少字节
* byte 1字节
* short 2字节
* int 4字节
* long 8字节
* float 4字节
* double 8字节
* char 2字节
* boolean 1字节

### String、StringBuilder、StringBuffer的区别
* String 字符串常量
* StringBuffer 字符串变量（线程安全）
* StringBuilder 字符串变量（非线程安全）

String 类型和 StringBuffer 类型的主要性能区别其实在于 String 是不可变的对象, 因此在每次对 String 类型进行改变的时候其实都等同于生成了一个新的 String 对象，然后将指针指向新的 String 对象，所以经常改变内容的字符串最好不要用 String ，因为每次生成对象都会对系统性能产生影响


### 抽象类和接口的异同，其成员变量和方法默认是什么修饰


<img src="assets/java/class-intefce.png"/>


### 字符串排序的数字排序
有一组字符串"12 3 56 48 -6 65 55"，实现里面的数字按从小到大的顺序排列，最终输出字符串为"-6 3 12 48 55 56 65"

1. 字符串转数组
2. 排序
3. 输出

## 二
### SpringMVC的流程

### 如何SQL优化

### 