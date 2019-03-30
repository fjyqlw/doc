# 希尔排序
是选择排序的进化版：插入排序算法对大致有序的数组效率比较高；
但是如果是反序，那么插入排序将会进行大量的移动复制，如果先让部分的局部有序，那么久能够减少移动的次数

## 什么是希尔排序
- 先取一个小于n的整数d1作为第一个增量，把文件的全部记录分组。
- 所有距离为d1的倍数的记录放在同一个组中。
- 先在各组内进行直接插入排序；
- 然后，取第二个增量 d2 < d1 重复上述的分组和排序，
- 直至所取的增量  =1(<  …< d2 < d1)，即所有记录放在同一组中进行直接插入排序为止。

## 关于增量的选取一般用3h+1的算数公式

## 参考代码
```java
public class ShellSort {
    public static void main(String[]args){
        int[] data = {11, 66, 33, 44, 77, 55};
        System.out.println(Arrays.toString(data));

        //计算间隔
        int length=data.length;
        int h=1;
        while(h<=length/3)
            h=3*h+1;

        while(h>0){
            for(int i=h;i<length;i++){
                int temp=data[i];
                int j=i;
                while(j>h-1&&data[j-h]>temp){
                    data[j]=data[j-h];
                    j-=h;
                }
                data[j]=temp;
            }
            h=(h-1)/3;
        }

        System.out.println(Arrays.toString(data));
    }
}
```