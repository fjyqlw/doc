# Top-K问题

## 方法
1. 全局排序  O(n*lg(n))
2. 局部排序，只排序topK个数，冒泡排序前k个，O(n*k)
3. 堆排序，topK个数也不用排序了，O(n*lg(k))
4. 分治法，每个分支“都要”递归，例如：快速排序，O(n*lg(n))
5. 减治法，“只要”递归一个分支，例如：二分查找O(lg(n))，随机选择O(n)
6. TopK的另一个解法：随机选择+partition
7. 比特位图法（bitmap）计数

## 冒泡法

```java
public class TopK {
    public static void main(String[] args) {
        int K = 3;
        int[] arr = new int[]{2,4,7,5,1,8,44,20,3,9,0};
        System.out.println("原数组："+Arrays.toString(arr));

        System.out.print("Top-K：");
        for (int i = 0; i < K; i++) {
            for (int j = 0; j < arr.length - i -1; j++) {
                if (arr[j] > arr[j+1]) {
                    int tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                }
            }

            System.out.print(arr[arr.length-i-1] + "\t");
        }
        System.out.println();
        System.out.println("冒泡后："+Arrays.toString(arr));
    }
}
```

```
原数组：[2, 4, 7, 5, 1, 8, 44, 20, 3, 9, 0]
Top-K：44	20	9	
冒泡后：[2, 1, 4, 5, 7, 3, 8, 0, 9, 20, 44]
```