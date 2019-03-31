# 选择排序

## 什么是选择排序
选择排序是选择数组中最小的数将该数移动到数组最前面，将其他元素往后移动，重复N次操作（时间复杂的（O（N2）））

## 原理
data{44,77,55,33,66}
- 第一次运行：data{33，44，77，55，66}
- 第二次运行：data{33，44，77，55，66}
- ......
- 第N次运行：data{33，44，55，66，77}

# 参考代码

```java
public class SelectSort {
    public static void main(String[] args) {
        int[] data = {11, 66, 66, 44, 77, 55};
        System.out.println(Arrays.toString(data));

        for (int i = 0; i < data.length; i++) {
            int idx = i;
            for (int j = i + 1; j < data.length; j++) {
                if (data[j] < data[idx]) {
                    idx = j;
                }
            }
            if (idx > i) {
                int tmp = data[i];
                data[i] = data[idx];
                data[idx] = tmp;
            }
        }
        System.out.println(Arrays.toString(data));
    }
}
```