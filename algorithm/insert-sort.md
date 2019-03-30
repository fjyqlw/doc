# 插入排序

## 什么是插入排序
插入排序是将数组划分为两个部分：有序部分和无序部分，将无序部分插入有序部分，重复执行N-1次,默认数组第一项就是有序的（时间复杂的O（N2））

## 插入排序的原理
data{44,77,55,33,66}
- 第一次：data{44，77，55，33，66}
- 第二次：data{44，55，77，33，66}
- ......
-第N次：data{33，44，55，66，77}

## 参考代码
```java
public class InsertSort {
    public static void main(String[]args){
        int[] data = {11, 66, 33, 44, 77, 55};
        int i;
        System.out.println(Arrays.toString(data));
        for(i=1;i<data.length;i++){
            if(data[i-1]>data[i]){
                int temp=data[i];
                int j=i;
                while(j>0&&data[i]<data[j-1]){
                    data[j]=data[j-1];
                    j--;
                }
                data[j]=temp;
            }
        }
        System.out.println(Arrays.toString(data));
    }
}
```