# SpringCloud

## springcloud如何实现服务的注册和发现
服务在发布时 指定对应的服务名（服务名包括了IP地址和端口） 将服务注册到注册中心（eureka或者zookeeper）
这一过程是springcloud自动实现 只需要在main方法添加@EnableDisscoveryClient  同一个服务修改端口就可以启动多个实例
**调用方法**：传递服务名称通过注册中心获取所有的可用实例 通过负载均衡策略调用（ribbon和feign）对应的服务

## ribbon和feign区别
Ribbon添加maven依赖 spring-starter-ribbon 使用@RibbonClient(value="服务名称") 使用RestTemplate调用远程服务对应的方法

feign添加maven依赖 spring-starter-feign 服务提供方提供对外接口 调用方使用 在接口上使用@FeignClient("指定服务名")

## Ribbon和Feign的区别
 Ribbon和Feign都是用于调用其他服务的，不过方式不同。
1. 启动类使用的注解不同，Ribbon用的是@RibbonClient，Feign用的是@EnableFeignClients。
2. 服务的指定位置不同，Ribbon是在@RibbonClient注解上声明，Feign则是在定义抽象方法的接口中使用@FeignClient声明。
3. 调用方式不同，Ribbon需要自己构建http请求，模拟http请求然后使用RestTemplate发送给其他服务，步骤相当繁琐。

Feign则是在Ribbon的基础上进行了一次改进，采用接口的方式，将需要调用的其他服务的方法定义成抽象方法即可，不需要自己构建http请求。不过要注意的是抽象方法的注解、方法签名要和提供服务的方法完全一致。

## springcloud断路器的作用
当一个服务调用另一个服务由于网络原因或者自身原因出现问题时 调用者就会等待被调用者的响应 当更多的服务请求到这些资源时导致更多的请求等待 这样就会发生连锁效应（雪崩效应） 断路器就是解决这一问题

### 断路器有完全打开状态
一定时间内,达到一定的次数无法调用,并且多次检测没有恢复的迹象,断路器完全打开，那么下次请求就不会请求到该服务
### 半开
短时间内有恢复迹象,断路器会将部分请求发给该服务,当能正常调用时断路器关闭
### 关闭
当服务一直处于正常状态 能正常调用 断路器关闭
