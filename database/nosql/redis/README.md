# Redis
通过异步方式写入硬盘

1. 速度快：数据存储在内存中
2. 数据类型丰富：string、list、hsahMap、sorted set、set
3. 支持事务操作

- 设置登录密码
> config set requirepass 123456

- 远程登录
> redis-cli -h 127.0.0.1 -p 9005 -a 123456

- 设置过期时间（单位是秒）
> expire key 30

- 选择数据库

> select 0

## string
二进制安全，一个key最大可以512M

- 设置值
> set key value

- 获取值
> get key

- 删除值
> del key

## hash

- 设置值
> hset key field1 value1 field2 value2

- 获取某个属性值
> hget key field1

- 获取所有属性
> hgetall key

## list

- 设置值
> lpush key a

- 获取指定范围列表
> lrange key 0 5

- 获取长度
> llen key

- 移除并去除列表第一个元素
> lpop key

## set
- 添加值
> sadd key a

- 删除值
> srem key a

- 列出所有
> smembers key

## sorted set
- 添加值
```
zadd key 0 a
zadd key 1 b
```
- 获取指定权重范围
```
zrangebyscore key 0 5
```

