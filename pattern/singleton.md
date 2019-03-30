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