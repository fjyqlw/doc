# 临时

## mybatis一级缓存与二级缓存，缓存什么时候才被清空
- 二级缓存
```xml
<insertid='insertUser' parameterType='cn.itcast.mybatis.po.User' flushCache='true'>
```

## @autowried @resource的区别
Resource注解是J2EE提供的, 而Autowried注解是Spring提供的, 如果想减少对Spring的依赖建议使用Resource注解

## 设计模式六大原则
- 单一职责
- 开闭原则
- 里氏替换原则
- 依赖倒置原则
- 接口隔离原则
- 迪米特法则

## spring事物失效
## jdk8中hashmap与jkd8以前有什么区别
## eclipse中maven多模块开发
## springboot中注解@SpringBootApplication
## ActiveMQ的两种消息形式
## dubbo超时和重试
## dubbo与mq有什么相同点
## 异常（运行时异常与非运行时异常），事物回滚情况
## spring事物，传播属性与隔离级别
## dubbo默认超时时间、dubbo服务调用超时问题解决方案
## 职业规划：在这两三年内还是要从事技术方面的研究
## 阿里巴巴java开发规范、那些规范可以提高性能
## jvm内存模型
## jvm调优
## 如果一个项目在正式环境上面发生OOM，怎么办？
## synchronize与lock的区别
## 数据库分表与分库，用过哪些数据库中间件（mycat）
## spring事物中的传播行为与隔离级别(七种事务传播行为及五种隔离级别)
## 外键索引为什么查询效率高
## 查询以.com结尾的邮箱，要使用到索引
## 如果一张主表关联10张表，怎么查询效率高，是一个sql语句还是怎么做
## thread与runnable的区别
## java静态代理与动态代理，怎么实现
## io与nio，Tomcat中是否使用到nio
## spring事物的隔离级别，幻度、虚度、脏读
## 分布式事物
## 你理解的高并发
## 线程池中的线程数一般设置多少合适
## 常用的线程池
## 线程状态，怎么交替
## spring中ben的生命周期、spring ben的加载机制
## 设计模式了解哪些，说一下代理模式，单例有几种实现方式
## mqsql中函数与存储过程的区别
## 数据库聚集索引、有哪些索引？
## left join、right join、inner join
## 一张表关联10张表查询数据
## 用过哪些缓存、chcache、Redis
## hashmap怎么动态扩容
## hashtable与hashset
## 红黑树原理
## springcloud、atfax、熔断
## ribbon、负载均衡、消息组件
## dubbo扩展协议、泛华
## dubbo工作原理
## springboot
## jvm调优
## gc回收算法、标记清除、
## java类加载机制、有几种加载方式
## mq（主要两个功能：消峰、减耦、异步）
## spring、springMVC工作原理
## integer a=1000; integer b=1000; a==b?
	①、无论如何，Integer与new Integer不会相等。
	Integer integer3 = new Integer(126);
	Integer a1 = 126;       //  integer3 == a1 -> false
	②、两个都是非new出来的Integer，如果数在-128到127之间，则是true,否则为false。
	Integer a1 = 126;
	Integer a2 = 126;       // a1 == a2 -> true
	Integer a = 128;
	Integer b = 128;         //  a == b -> false
	③、两个都是new出来的,则为false。
	Integer integer1 = new Integer(12);
	Integer integer2 = new Integer(12);      // integer1 == integer2 -> false
	④、int和integer(new或非new)比较，都为true，因为会把Integer自动拆箱为int，其实就是相当于两个int类型比较。
	只要是new，一定是在堆中创建对象，Integer，如果不是new，并且数值在-128--127之间，则取缓存中的值。

	java中基本类型的包装类的大部分都实现了常量池技术，这些类是Byte,Short,Integer,Long,Character,Boolean,另外两种浮点数类型的包装类则没有实现。
	另外Byte,Short,Integer,Long,Character这5种整型的包装类也只是在对应值小于等于127时才可使用对象池，也即对象不负责创建和管理大于127的这些类的对象
## Redis事物、超时配置
## MySQL数据库引擎有哪些，分别有什么特点
## jvm、集合
## sql调优、索引创建原则
## MQ 实现分布式事务 
## object中有哪些方法（Object类有12个成员方法）
## list中怎么快速查找出基数 (filter 过滤器)
## spring与springmvc容器父子关系引出的相关问题
## dubbo负载均衡是在哪里处理的
## springmvc中的异常处理
## 在一个事物方法中，如果try中发生了异常，catch中没有抛出这个异常，事物会不会回滚?
## 数据库建立索引的原则 
