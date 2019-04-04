# 笔记

## 熟悉多线程编程
### 竟态条件
多线程对一些资源竞争时产生，如果首先要执行的程序竞争失败被排到后面去了，会产生不确定的bug
### 如何终止一个线程
通过定义一个volatile的布尔变量去结束循环或者取消任务
### 线程运行时发生异常
需要通过Thread.UnCaughtExceptionHandler才能捕捉异常
### 多线程如何共享数据
通过共享对象，wait(),notifyAll()
### notify和notifyAll有什么区别
notify只能随机唤醒一个线程，而notifyAll可以唤醒所有线程，由线程自己去争夺锁，所以notify只有在一个线程在等待的时候才有作用
### 为什么wait、notify和notifyAll方法不再Thread里面 
因为java提供的锁是对象级别而不是线程级别
### 什么是threadlocal变量
ThreadLocal：只能保存一个变量副本，要保存多个的话需要建多个ThreadLocal；ThreadLocalMap的键为弱引用，有内存泄漏的风险，需要及时调用remove方法
为什么notify和wait方法要放在同步块中调用：Java的Api要求，否则会抛出IllegalMotorStateException；为了避免wait和notify产生竟态条件
### 为什么在循环中检查等待条件
防止伪唤醒，一个对象在多个线程中等待时，调用notifyAll会唤醒所有的线程，需要再次验证等待
### 死锁
1. 互斥条件
一个资源一次只能被一个线程使用
2. 请求与保持条件
当一个线程因等待请求的资源而阻塞时，不会释放已获得的资源
3. 不剥夺条件
进程已获得的资源，在未使用完之前，不得强制剥夺
4. 循环等待条件

### 如何避免死锁
阻止循环等待条件，将系统中所有资源设置标志位、排序，规定所有进程申请资源必须以一定的顺序
### 活锁与死锁的区别
活锁是两个线程都试图改变状态来达到正常运行，但是却还是不能继续执行；死锁是不改变状态
### 判断线程是否持有某个对象的锁
Thread.holdLock(obj);
### 如何保持线程顺序执行
在线程start之后，下个线程start之前，调用join方法
### yeild和join区别
yeild会暂停当前线程，回到就绪状态，不会使线程阻塞；而join需要等待调用join的线程结束
### 线程池提交的队列已满时
会抛出RejectExectionException异常
### 线程池submit和execute
submit会返回计算结果Future，它定义在ExecutorService中；而execute返回的是void，定义在Executor接口中
### ReadAndWriteLock
对读共享，可以被多个线程持有读锁，对写独占，只有一个线程能持有写的锁
### 多线程的忙循环
保持CPU的控制权，不使用wait、sleep、yield等方法，在多核系统中为了减少CPU重建缓存
### volatile和atomic区别
volatile只有可见性不具有原子性，他能保证在后续的读之前完成写操作；而atomic具有原子性
### 如果同步块中抛出异常
会自动释放锁，而如果用Lock则需要手动释放
### 遵循多线程的最佳实践
1. 给线程取有意义的名字
2. 多用同步类，少用wait和notify，比如countDownLatch
3. 同步块锁定范围尽可能小
4. 多用并发集合，少用同步集合

### wait和sleep区别
都会是线程暂停，wait用于线程之间通信，会释放锁，直到等待条件为真；而sleep会解除对CPU的控制权，但不会释放锁

## 掌握常用的设计模式
工厂模式：监听器从mqtt服务器收到不同类型的消息，通过消息类型从工厂创建不同的消息处理工具

装饰器模式：数据入库操作有直接入库和校准后再入库及给设备反馈消息的操作；通过定义一个入库接口，三种入库方式分别实现入库接口的方法，根据不同需求添加额外的操作。

## Spring

## SpringBoot
能独立运行，简化配置，自动配置，无代码生成和xml配置，应用监控

### 核心注解
@SpringBootApplication包含@SpringbootConfiguration,@EnableAutoConfiguration,@ComponentScan

### 如何在启动时运行特定代码
可以在组件上实现CommandLineRunner或者ApplicationRunner
### 读取配置的方式
@Value("${p}")、@ConfigurationProperties(prefix="user")、@PropertySource(value="/db,properties")+@Value
### 热部署
添加devtools依赖
### 如何指定不同环境配置文件
spring.profiles.active=prod；或者@Profile("prod")
### SpringBoot自动配置原理
在spring程序的mian方法中添加@SpringBootApplication或者@EnableAutoConfiguration，会自动从maven的starter中读取spring.factors文件

### Spring Boot、Spring MVC 和 Spring 有什么区别？
spring是一个引擎，提供ioc和aop等基本功能，springMVC是基于spring的一个mvc框架，而springboot是基于spring4的一个快速开发的整合包

## SpringCloud

## iBatis和MyBatis
### 一级缓存和二级缓存
1. 一级缓存（sqlsession级别）
mybatis首先去缓存中查询结果集，如果有直接返回，没有则查询数据库，一级缓存默认开启，通过hashmap存储，key未hashcode+sqlid+sql语句
2. 二级缓存
他的作用域是mapper的namespace，在同一个namespace查询数据会在缓存中获取，可以跨sqlsession


## 熟悉JVM，内存模型
### 程序计数器
1. 字节码解释器通过改变程序计数器来依次读取指令，从而实现代码的流程控制，如：顺序、循环、选择、异常处理等
2. 在多线程情况下，程序计数器用于记录当前线程的执行位置，从而当前线程被切换回来的时候能够知道该线程上次运行到哪了
3. 程序及数据是唯一一个不会内存溢出的内存区域，他的生命周期随着线程一起创建和消亡

### Java虚拟机栈
 描述的是Java为方法执行的内存模型，由一个个栈帧组成，每个栈帧中都拥有
 
1. StackOverFlowError
   java虚拟机栈的内存不允许动态扩展时，当前线程请求栈的深度超出了当前java虚拟机栈的最大深度
2. OutOfMemoryError
   java虚拟机栈的内存大小允许动态扩展，且当前线程请求栈是内存用完了
 
 
### 堆
存放对象实例，几乎所有的对象实例都在这里分配内存
### 虚拟机栈
虚拟机栈描述的是Java方法执行的内存模型：每个方法被执行的时候都会同时创建一个栈帧（StackFrame）用于存储局部变量表、操作栈、动态链接、方法出口等信息
### 本地方法栈
本地方法栈则是为虚拟机使用到的Native方法服务。
### 方法区
存储已被虚拟机加载的类元数据信息(元空间)
### 程序计数器
当前线程所执行的字节码的行号指示器
 
## 类加载机制
### 双亲委派模式
防止出现重复加载类，防止java核心api被修改
BootStrapClassLoader-ExtClassLoader-AppClassLoader

当AppClassLoader收到类加载请求的时候，不会直接去加载，而是委托给父类ExtClassLoader加载，ExtClassLoader又委托给BootStrapClassLoader，当BootStrapClassLoader无法加载该类的时候，会使用ExtClassLoader，当ExtClassLoader也无法加载类的时候，会使用APPClassLoader加载，如果APPClassLoader也无法就加载该类，则抛出ClassNotFoundException

### 类加载顺序
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

## JVM性能优化
### JVM垃圾收集器：
1. 串行收集器
会暂停整个应用的运行，几乎用不上
-XX:+UseSerialGC
2. 并行收集器（默认）
使用多线程扫描和压缩堆，在minor和fullGC时都会暂停应用，适用于容忍程序停滞的环境使用，占用CPU低，有较高的吞吐量
-XX:+UseParallelGC
3. CMS收集器(Concurrent-Mark-Sweep，并发的标记和清除)
使用多个线程扫描堆，标记需要清除的对象
问题：有会出现提升失败和内存空间碎片化
解决：增加线程
4. G1收集器
-XX:+UseG1GC

## SQL高级查询

## Redis常用操作
通过异步的方式写到硬盘
如何设置密码及验证：config set requirepass 123456

好处：1、速度快：数据存储在内存中；2、数据类型丰富：支持string、list、set、sorted set、hash；3、支持事务操作

String：二进制安全，一个键最大可以存储512M；set name lianwei;get name
Hash:hmset name key1 value1 key2 value2;hmget name ke1;hgetall 
list:lpush list 1;lrange list 0 1;rpush list
set:sadd myset a;smembers myset;
sorted set:zadd myzset 0 a;zadd myzset 2 b;zrangebyscore myzset 0 5;

选择哪个数据库：通过select 0;select 1;
远程连接：redis-cli -h 127.0.0.1 -p 9005 -a 123456
设置过期时间:expire key 30;




## web软件分层设计

## 大数据、人工智能

## 软件工程知识（UML图）

## 编码规范

## 项目中遇到的最难的问题，如何解决
周六下午，客户反映手工监测系统突然某几个页面无法响应数据了，而其他功能又是正常的。经过分析有问题的那些接口，发现都包含了同一个业务表，于是直接把这个业务表放到plsql上去查询发现也查不出来，由此推断应该是锁表了，于是查询所有加锁的表及session，该表确实被锁了。把该表的session结束掉之后系统恢复正常。经过询问开发和测试是否操作过这个表，最终发现是测试在头天晚上下班前应客户要求修改了错误数据，使用for Update后未提交导致锁表问题。

```sql
SELECT vs.sid, vs.serial# FROM v$locked_object vlo, dba_objects do, v$session vs 
 WHERE do.object_id = vlo.object_id AND vlo.session_id = vs.sid; 
```

```sql
ALTER system KILL session 'sid,serial#'
```

## CountDownLatch

```java
特有方法： 
public CountDownLatch(int count); //指定计数的次数，只能被设置1次
public void countDown();          //调用此方法则计数减1
public void await() throws InterruptedException   //调用此方法会一直阻塞当前线程，直到计时器的值为0，除非线程被中断。
Public Long getCount();           //得到当前的计数
Public boolean await(long timeout, TimeUnit unit) //调用此方法会一直阻塞当前线程，直到计时器的值为0，除非线程被中断或者计数器超时，返回false代表计数器超时。
From Object Inherited：
Clone、equals、hashCode、notify、notifyALL、wait等。
```

### 使用场景
1. 开启多个线程分块下载一个大文件，每个线程只下载固定的一截，最后由另外一个线程来拼接所有的分段。

2. 应用程序的主线程希望在负责启动框架服务的线程已经启动所有的框架服务之后再执行。

3. 确保一个计算不会执行，直到所需要的资源被初始化。

### 示例

```java
public class CountDownLatchDemo {  
    final static SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
    public static void main(String[] args) throws InterruptedException {  
        CountDownLatch latch=new CountDownLatch(2);//两个工人的协作  
        Worker worker1=new Worker("zhang san", 5000, latch);  
        Worker worker2=new Worker("li si", 8000, latch);  
        worker1.start();//  
        worker2.start();//  
        latch.await();//等待所有工人完成工作  
        System.out.println("all work done at "+sdf.format(new Date()));  
    }  
      
      
    static class Worker extends Thread{  
        String workerName;   
        int workTime;  
        CountDownLatch latch;  
        public Worker(String workerName ,int workTime ,CountDownLatch latch){  
             this.workerName=workerName;  
             this.workTime=workTime;  
             this.latch=latch;  
        }  
        public void run(){  
            System.out.println("Worker "+workerName+" do work begin at "+sdf.format(new Date()));  
            doWork();//工作了  
            System.out.println("Worker "+workerName+" do work complete at "+sdf.format(new Date()));  
            latch.countDown();//工人完成工作，计数器减一  
  
        }  
          
        private void doWork(){  
            try {  
                Thread.sleep(workTime);  
            } catch (InterruptedException e) {  
                e.printStackTrace();  
            }  
        }  
    }  
}
```