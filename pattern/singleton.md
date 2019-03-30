# 单例模式

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
