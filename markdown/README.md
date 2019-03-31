# Markdown语法

## 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```
# 一级标题 {docsify-ignore}
## 二级标题 {docsify-ignore}
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 表格

```markdown
|姓名|年龄|技能|
|---|---|---|
|Tom|18|Android|
|Cat|20|iOS|
```
|姓名|年龄|技能|
|---|---|---|
|Tom|18|Android|
|Cat|20|iOS|

## 列表
### 无序列表
可以使用 *、+、- 符号来实现，效果相同，注意符号和文字之间有一个空格，例如：
```markdown
* aaaa
* bbbb
* cccc
```
* aaaa
* bbbb
* cccc

### 有序列表

有序列表
使用数字和点号表示有序列表，点号后有一个空格，例如：
```markdown
1. aaaa
1. bbbb
3. cccc
```
1. aaaa
1. bbbb
3. cccc

### 混合使用
混合使用
```markdown
* 第一章
1. aaaa
2. bbbb
* 第二章
1. cccc
2. dddd
```
* 第一章
1. aaaa
2. bbbb
* 第二章
1. cccc
2. dddd

## 上下角标

```markdown
H~2~O is是液体。
H^2^
H<sub>333<sup>222
```
H<sub>333<sup>222

## 图片

```
 ![图片描述](图片网络路径)
 ```

 例如

```markdown
![markdown](../assets/demo.png)
```

![markdown](../assets/demo.png)

## 链接
```
[链接描述](链接地址) 或者 <链接地址>
```
例如
```markdown
[github](https://github.com)
<https://github.com>
```
[github](https://github.com)

<https://github.com>

## 引用
### 一般引用
```markdown
> The Zen of Python, by Tim Peters  
Beautiful is better than ugly.  
Explicit is better than implicit.  
Simple is better than complex.  
Complex is better than complicated.  
```

> The Zen of Python, by Tim Peters  
Beautiful is better than ugly.  
Explicit is better than implicit.  
Simple is better than complex.  
Complex is better than complicated.

### 引用嵌套：
```markdown
> The Zen of Python, by Tim Peters  
>> Beautiful is better than ugly.  
>>> Explicit is better than implicit. 
```
> The Zen of Python, by Tim Peters  
>> Beautiful is better than ugly.  
>>> Explicit is better than implicit. 

## 斜体
```markdown
*Hello World*
_Hello World_
```
*Hello World*
_Hello World_

## 强调
```markdown
**Hello World**
__Hello World__
```
**Hello World**
__Hello World__

## 代码
1. 单行代码
用连个反引号括起来，例如：
```markdown
`String str = "Hello World";`
```
`String str = "Hello World";`

2. 代码块
用一组三个的反引号括起来，可以注明语言类型，例如java、python等等，以实现不同的代码块高亮效果：

```markdown
```java
代码片段
(```)
```

```java
    public static boolean isMatch(String str) {
        if (null == str) {
            return false;
        }

        Stack<Character> stack = new Stack<>();

        char[] chars = str.toCharArray();

        for (char c : chars) {
            if (map.containsValue(c)) {
                stack.push(c);
            } else if (map.containsKey(c)) {
                if (stack.isEmpty() || !stack.pop().equals(map.get(c))) {
                    return false;
                }
            }
        }

        return stack.isEmpty();
    }
```

## 中划线
```markdown
~~Hello World~~
```
~~Hello World~~

## 分割线
```markdown
---
***
```
---
***

## todo list
在Github、Cmd Markdown上能达到预期效果，以下为Github上的效果：
```markdown
- [X] step one
- [ ] step two
```
- [X] step one
- [ ] step two

## 特殊符号
### 字符转义
由于*、+、-、[]、()、_、>、#、~等字符在Markdown中有特殊含义，要表示这些字符本身时如果不能正常显示，就需要使用转义字符\，例如要显示：*Hello World*，如果*前不加转义字符\，最终的显示效果就是斜体 Hello World 了。

### 特殊字符
在网站https://unicode-table.com/cn/上，有许多特殊字符的HTML代码，可以直接在Markdown中使用，例如：

字符的HTML代码|字符
--|--
\&#10084;|❤
\&#9733;|★
\&#9835;|♫
\&#10052;|❄
\&#9775;|☯

### Emoji
简书、Cmd Markdown目前不支持Emoji表情符号，在Github可以正常使用
https://www.webpagefx.com/tools/emoji-cheat-sheet/里可以查看Emoji表情符号，例如在Github上可以看到如下效果：
```markdown
:smile:
:heart_eyes:
:heart:
:fire:
```

:smile:
:heart_eyes:
:heart:
:fire:

## 简单的HTML支持
```markdown
<ul>
  <li>aaaaaa</li>
  <li>bbbbbb</li>
  <li>cccccc</li>
  <li>dddddd</li>
</ul>
```
<ul>
  <li>aaaaaa</li>
  <li>bbbbbb</li>
  <li>cccccc</li>
  <li>dddddd</li>
</ul>

## 脚注
在需要添加脚注的文字后添加[^脚注名称]，这一步称为加注，然后根据脚注的名称添加脚注，即可实现脚注功能，例如：
```markdown
Django[^1]和Flask[^2]是Python中有名的Web框架！
[^1]:Django是一个开放源代码的Web应用框架.....
[^2]:Flask是一个使用 Python 编写的轻量级 Web 应用框架.....
```
Django[^1]和Flask[^2]是Python中有名的Web框架！
[^1]:Django是一个开放源代码的Web应用框架.....
[^2]:Flask是一个使用 Python 编写的轻量级 Web 应用框架.....

## 锚点
锚点是HTML里常用的页内跳转方式，在Markdown里也有类似的操作，但不常用，目前Github、Cmd Markdown不支持，

```markdown
标题{#标题}
点我回到[标题](#标题)
```
首页{#标题}
点我回到[标题](#标题)

## LaTeX公式
目前Github和简书都不支持，可使用Cmd Markdown查看具体效果。
1. 行内公式
格式：$公式内容$，例如：

```markdown
$
f\left(
   \left[ 
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
$
```
$
f\left(
   \left[ 
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
$

2. 整行公式
主要用来展示，公式会水平居中。
格式：$$公式内容$$，例如：
```markdown
$$
f\left(
   \left[ 
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
$$
```
$$
f\left(
   \left[ 
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
$$

## 流程图
语言类型为flow的代码块：更多细节可[参考](http://flowchart.js.org/)

```markdown
```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```
```

```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```

## 序列图
语言类型为seq的代码块：

```seq
Title: 标题
A->B: 描述...
B-->C: 描述...
C->>D: 描述...
D-->>A: 描述...
```

Title: 标题
A->B: 描述...
B-->C: 描述...
C->>D: 描述...
D-->>A: 描述...

## 甘特图
语言类型为gantt的代码块：
```markdown
```gantt
    title 项目开发流程
    section 项目确定
        需求分析       :done, a1, 2018-01-22, 5d
        可行性报告     :done, after a1, 5d
    section 项目实施
        概要设计      :2018-02-02, 5d
        详细设计      :2018-02-07, 10d
        编码          :2018-02-17, 20d
        测试          :2018-02-25, 15d
    section 验收发布
        验收: 3d
        发布: 2d
(```)
```

```gantt
    title 项目开发流程
    section 项目确定
        需求分析       :done, a1, 2018-01-22, 5d
        可行性报告     :done, after a1, 5d
    section 项目实施
        概要设计      :2018-02-02, 5d
        详细设计      :2018-02-07, 10d
        编码          :2018-02-17, 20d
        测试          :2018-02-25, 15d
    section 验收发布
        验收: 3d
        发布: 2d
```