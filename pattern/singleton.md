# 单例模式

## 使用场景

- 网站访问量统计
- 配置文件读取
- 数据库连接池

**优点：** 
1. 提供了对唯一实例的受控访问。 
2. 在系统内存中只存在一个对象，因此可以节约系统的资源，对于一些需要频繁创建和销毁的对象，使用单例模式无疑是提高了系统的性能。 
3. 单例模式允许可变数目的实例。基于单例模式可以进行扩展，使用与控制单例对象相似的方法获得指定个数的实例对象，既节约了系统资源，又解决了由于单例对象共享过多有损性能的问题(自行提供指定数目实例对象的类可成为多例类) 

**缺点：**
1. 由于单例模式没有抽象层，所以扩展起来很难。 
2. 单例类职责过重，在一定程度上违背了单一职责。因为单例类既提供了业务方法，又提供了创建对象的方法(工厂方法)，将对象的创建和对象本身的功能耦合在一起。 
3. 垃圾回收机制，如果实例化的共享对象长时间不被利用，系统会认为它是垃圾，会自动销毁并回收资源。在下次利用时又将重新实例化，这将导致共享单例对象状态丢失。

## 成员内部类

```java
final class  Singleton {
    private Singleton() {}
    
    public static class SingletonHolder {
        private final static Singleton INSTANCE = new Singleton();
    }
    
    public static Singleton getInstance() {
        return SingletonHolder.INSTANCE;
    }
}
```

## 双重加锁

```java
final class Singleton {
    private static Singleton INSTANCE = null;
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (null == INSTANCE) {
            synchronized (Singleton.class) {
                if (null == INSTANCE) {
                    INSTANCE = new Singleton();
                }
            }
        }
        
        return INSTANCE;
    }
}
```

## 枚举方式
```java
public enum Singleton {
    INSTANCE;

    public void todo() {
        System.out.println("todo");
    }
}
```