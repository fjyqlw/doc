# Java类加载机制

## 类加载顺序

1. 加载
   查找和加载二进制数据，在java堆内存中创建一个java.lang.Class类的对象

2. 验证
   验证文件格式、元数据、字节码、符号引用
3. 准备
   给类静态变量分配内存空间，赋予默认值
4. 解析
   把类中的符号引用转换为直接引用
5. 初始化
   给类静态变量赋予正确的初始值
6. 使用
   对象实例化
7. 卸载
   GC回收

## 类加载器

### 双亲委派模式
BootStrapClassLoader-ExtClassLoader-AppClassLoader

当AppClassLoader收到类加载请求的时候，不会直接去加载，而是委托给父类ExtClassLoader加载，ExtClassLoader又委托给BootStrapClassLoader，当BootStrapClassLoader无法加载该类的时候，会使用ExtClassLoader，当ExtClassLoader也无法加载类的时候，会使用APPClassLoader加载，如果APPClassLoader也无法就加载该类，则跑出ClassNotFoundException

#### 好处
- 避免类重复加载
- 避免java核心api被篡改