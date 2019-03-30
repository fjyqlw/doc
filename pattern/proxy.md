# 代理模式

## 静态代理


### 代码示例
```java
public class StaticProxyPattern {
    public static void main(String[] args) {
        ICoder coder = new Coder();
        PMProxy proxy = new PMProxy(coder);
        proxy.impl();
    }
}

interface ICoder {
    void impl();
}
class Coder implements ICoder {
    public void impl() {
        System.out.println("开发人员通过代码实现功能");
    }
}
class PMProxy implements ICoder {
    private ICoder coder;
    public PMProxy(ICoder coder){
        this.coder=coder;
    }
    public void impl() {
        System.out.println("PM可行性研究");
        System.out.println("PM任务安排");
        this.coder.impl();
        System.out.println("PM系统集成");
    }
}
```
输出
```
PM可行性研究
PM任务安排
开发人员通过代码实现功能
PM系统集成
```

## 动态代理

