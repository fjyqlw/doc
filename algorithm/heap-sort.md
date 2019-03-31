# 堆排序
## 什么是堆排序
- 堆排序(Heapsort)是指利用堆积树（堆）这种数据结构所设计的一种排序算法，它是选择排序的一种。
- 可以利用数组的特点快速定位指定索引的元素。堆分为大根堆和小根堆，是完全二叉树。大根堆的要求是每个节点的值都不大于其父节点的值，

即A[PARENT[i]] >= A[i]。在数组的非降序排序中，需要使用的就是大根堆，因为根据大根堆的要求可知，最大的值一定在堆顶。

<img src="../assets/heap-sort.gif" />

## 参考代码
```java
public class HeapSort {

    private int size;
    private Node[]nodes;
    private int elms;

    public HeapSort(int size){
        elms=0;
        this.nodes=new Node[size];
    }

    public boolean insert(int value){
        if(elms>=value)
            return false;
        Node node=new Node(value);
        nodes[elms]=node;
        trickUp(elms++);

        return true;
    }

    public Node remove(){
        Node temp=nodes[0];
        nodes[0]=nodes[--elms];
        trickDown(0);
        return temp;
    }

    private void trickUp(int index){

        int parent=(index-1)/2;
        Node temp=nodes[index];
        while(index>0&&nodes[parent].value<temp.value){
            nodes[index]=nodes[parent];
            index=parent;
            parent=(parent-1)/2;
        }
        nodes[index]=temp;
    }

    private void trickDown(int index){

        Node temp=nodes[0];
        int largeChild=0;

        while(index<elms/2){
            largeChild=maxNode(index);
            if(temp.value>nodes[largeChild].value)
                break;
            else{
                nodes[index]=nodes[largeChild];
                index=largeChild;
            }
        }
        nodes[index]=temp;
    }

    public static void main(String []args){

        HeapSort h=new HeapSort(10);
        h.insert(10);
        h.insert(23);
        h.insert(12);
        h.insert(17);
        h.insert(33);

        h.print();
        System.out.println(h.remove());
        System.out.println(h.remove());
        System.out.println(h.remove());
        System.out.println(h.remove());
        System.out.println(h.remove());

    }

    private void print() {
        System.out.println(Arrays.toString(nodes));
    }

    private int maxNode(int parent){
        int left=parent*2+1;
        int right=parent*2+2;

        if (right<elms&&nodes[left].value<nodes[right].value)
            return right;
        else
            return left;
    }

    private class Node{
        public int value;
        public Node(int value){
            this.value=value;
        }

        @Override
        public String toString() {
            return "HeapSort{" +
                    "value=" + value +
                    '}';
        }
    }
}
```