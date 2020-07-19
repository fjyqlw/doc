# 判断单链表是否成环算法

## 算法思想
定义两个指针p, q，其中p每次向前移动一步，q每次向前移动两步，所以就成p为慢指针，q为快指针。 

那么如果单链表存在环，则p和q进入环后一定会在某一点相遇，因为进入环后就会一直循环下去，否则q将首先遇到null，就说明不存在环。

## 算法实现

```java
public class LinkListCircle {
    static List<Node> list = new ArrayList<Node>();

    public static void main(String[] args) {
        init();

        //要让快的先走
        Node quick = list.get(0);
        Node slow=list.get(0);

        while (slow.next != null && quick.next!=null && quick.next.next!=null) {
            System.err.print("slow："+slow+"，quick："+quick + "--->");
            slow=slow.next;
            quick=quick.next.next;
            System.err.println("slow："+slow+"，quick："+quick);
            if (slow == quick) {
                System.err.println("成环");
                return;
            }
        }

        System.err.println("不成环");
    }

    public static void init() {
        Node n6 = new Node(6);
        Node n5 = new Node(5, n6);
        Node n4 = new Node(4, n5);
        Node n3 = new Node(3, n4);
        Node n2 = new Node(2, n3);
        Node n1 = new Node(1, n2);

        n6.next=n4;

        list.add(n1);
        list.add(n2);
        list.add(n3);
        list.add(n4);
        list.add(n5);
        list.add(n6);
    }

    public static void bitmap() {

    }
}

class Node {
    Node(Integer value) {
        this.value = value;
    }
    Node(Integer value, Node next) {
        this.value = value;
        this.next = next;
    }

    Node next = null;
    Node pre = null;
    Integer value;

    @Override
    public String toString() {
        return "Node{" +
                "value=" + value +
                '}';
    }
}
```

```
slow：Node{value=1}，quick：Node{value=1}--->slow：Node{value=2}，quick：Node{value=3}
slow：Node{value=2}，quick：Node{value=3}--->slow：Node{value=3}，quick：Node{value=5}
slow：Node{value=3}，quick：Node{value=5}--->slow：Node{value=4}，quick：Node{value=4}
成环
```