# SpringBoot

## 什么是 Spring Boot？
Spring Boot 是 Spring 开源组织下的子项目，是 Spring 组件一站式解决方案，主要是简化了使用 Spring 的难度，简省了繁重的配置，提供了各种启动器，开发者能快速上手。

## 为什么要用 Spring Boot？
Spring Boot 优点非常多
- 独立运行
- 简化配置
- 自动配置
- 无代码生成和XML配置
- 应用监控
- 上手容易
- ......

## Spring Boot 的核心配置文件有哪几个？它们的区别是什么？
Spring Boot 的核心配置文件是 application 和 bootstrap 配置文件。

application 配置文件这个容易理解，主要用于 Spring Boot 项目的自动化配置。

**bootstrap** 配置文件有以下几个应用场景。

使用 Spring Cloud Config 配置中心时，这时需要在 bootstrap 配置文件中添加连接到配置中心的配置属性来加载外部配置中心的配置信息；

一些固定的不能被覆盖的属性；

一些加密/解密的场景；

## Spring Boot 的配置文件有哪几种格式？它们有什么区别？
.properties 和 .yml，它们的区别主要是书写格式不同。

1. properties
```properties
app.user.name = javastack
```

2. yml
```yml
app:
  user:
    name: javastack
```
另外，.yml 格式不支持 @PropertySource 注解导入配置。

## Spring Boot 的核心注解是哪个？它主要由哪几个注解组成的？
启动类上面的注解是@SpringBootApplication，它也是 Spring Boot 的核心注解，主要组合包含了以下 3 个注解：

- @SpringBootConfiguration：组合了 @Configuration 注解，实现配置文件的功能。
- @EnableAutoConfiguration：打开自动配置的功能，也可以关闭某个自动配置的选项，如关闭数据源自动配置功能： @SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })。
- @ComponentScan：Spring组件扫描。

## 开启 Spring Boot 特性有哪几种方式？
1. 继承spring-boot-starter-parent项目
2. 导入spring-boot-dependencies项目依赖
