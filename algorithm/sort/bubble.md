# 冒泡排序

## 什么是冒泡排序
原理是临近的两个数比较大小，将较大的数往后移，这样遍历一趟数组以后，最大的数就排在的最后面（时间复杂的为O（N<sup>2））

重复上面步骤N次。

N个数字要排序完成，总共进行N-1趟排序，每i趟的排序次数为(N-i)次，所以可以用双重循环语句，外层控制循环多少趟，内层控制每一趟的循环次数

## 原理描述
data{44,77,55,33,66}
- 第一次运行：data{44,55,33,66,77}
- 第二次运行：data{44，33，55，66，77}
- ......
- 第N次执行：data{33，44，55，66，77}

<img src="assets/bubble-sort.gif" />

## 参考代码

```java
public class BubbleSort {
    public static void main(String[] args) {
        int[] data = {110, 67, 50, 44, 37, 25};
        System.out.println(Arrays.toString(data));
        for (int i = 0; i < data.length - 1; i++) {
            for (int j = 0; j < data.length-i-1; j++) {
                if (data[j] > data[j+1]) {
                    int tmp = data[j];
                    data[j] = data[j+1];
                    data[j+1] = tmp;
                }
            }
            System.out.println(Arrays.toString(data));
        }

    }
}
```
```bash
[110, 67, 50, 44, 37, 25]
[67, 50, 44, 37, 25, 110]
[50, 44, 37, 25, 67, 110]
[44, 37, 25, 50, 67, 110]
[37, 25, 44, 50, 67, 110]
[25, 37, 44, 50, 67, 110]
```

[参考](https://www.cnblogs.com/googlemeoften/p/5034008.html)