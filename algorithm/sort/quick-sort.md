# 快速排序

## 什么是快速排序
快速排序是在数组选择一个标准位（其实也就是在数组中选择一个数做参考），将比标志位大的数右移，比标志位小的左移，让缩小范围继续比较

<img src="../../assets/quick-sort.gif" />

## 参考代码
```java
public class QuickSort {
    int[] data = {11, 66, 33, 44, 77, 55};

    public void quickSort(int left, int right) {
        if ((right - left) <= 0)
            return;
        else {
            int pivot = data[right];

            int parttion = recQuickSort(left, right, pivot);
            quickSort(left, parttion - 1);
            quickSort(parttion + 1, right);
        }
    }

    public int recQuickSort(int left, int right, int pivot) {
        int leftPtr = left - 1;
        int rightPtr = right;
        while (true) {
            while (data[++leftPtr] < pivot) ;
            while (data[--rightPtr] > pivot) ;
            if (leftPtr >= rightPtr)
                break;
            else
                swap(leftPtr, rightPtr);
        }
        swap(leftPtr, right);
        return leftPtr;
    }

    public void swap(int i, int j) {
        data[i] = data[i] ^ data[j];
        data[j] = data[j] ^ data[i];
        data[i] = data[i] ^ data[j];
    }

    public static void main(String[] args) {
        QuickSort q = new QuickSort();
        System.out.println(Arrays.toString(q.data));

        q.quickSort(0, q.data.length - 1);
        System.out.println(Arrays.toString(q.data));
    }
}
```