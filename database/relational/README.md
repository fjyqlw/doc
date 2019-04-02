# 关系型数据库

### 数据类型(MySql)
MySQL的数据类型有大概可以分为5种，分别是 整数类型、浮点数类型和定点数类型、日期和时间类型、字符串类型、二进制类型。

注意：整数类型和浮点数类型可以统称为数值数据类型，这不难理解。

- 数值数据类型
   - **整数类型：**tinyint、smallint、mediumint、int、bigint
   - **浮点数类型：**float、double
   - **定点小数：**decimal
   - **日期/时间类型：**year、time、date、datetime、timestamp
   - **字符串类型：**char、varchar、text、enum、set等 　　
   - **二进制类型：**bit、binary、varbinary、blob

### 建表

```sql
create database mydb;
```

### 建表
```sql
CREATE TABLE mytable
(
id int,
name varchar
)
```


### 修改字段

### 触发器

### 存储过程
#### 语法
```sql
CREATE PROC[EDURE] 存储过程名 
@参数1 [数据类型]=[默认值] [OUTPUT] 
@参数2 [数据类型]=[默认值] [OUTPUT]
AS 
SQL语句
EXEC 过程名[参数]
```

#### 不带参数
```sql
create procedure proc_select_officeinfo--(存储过程名)
as select Id,Name from Office_Info--(sql语句)

exec proc_select_officeinfo--(调用存储过程)
```
#### 带输入参数
```sql
create procedure procedure_proc_GetoffinfoById --(存储过程名)
@Id int--(参数名 参数类型)
as select Name from dbo.Office_Info where Id=@Id--(sql语句)

exec procedure_proc_GetoffinfoById 2--(存储过程名称之后,空格加上参数,多个参数中间以逗号分隔)
```

注:参数赋值是,第一个参数可以不写参数名称,后面传入参数,需要明确传入的是哪个参数名称
#### 带输入输出参数
```sql
create procedure proc_office_info--（存储过程名）
@Id int,@Name varchar(20) output--(参数名 参数类型)传出参数要加上output
as 
begin
select @Name=Name from dbo.Office_Info where Id=@Id --(sql语句)
end

declare @houseName varchar(20) --声明一个变量,获取存储过程传出来的值
exec proc_office_info--(存储过程名)
4,@houseName output--(传说参数要加output 这边如果用@变量 = OUTPUT会报错，所以换一种写法)

select @houseName--(显示值)
```
#### 带返回值的
```sql
create procedure proc_office_info--（存储过程名）
@Id int--(参数名 参数类型)
as 
begin
if(select Name from dbo.Office_Info where Id=@Id)=null --(sql语句)
begin
return -1
end
else
begin
return 1
end
end

declare @house varchar(20) --声明一个变量,获取存储过程传出来的值
exec @house=proc_office_info 2 --(调用存储过程,用变量接收返回值)
--注：带返回值的存储过程只能为int类型的返回值
print @house
```
### 视图

```sql
CREATE VIEW view_name AS
SELECT column_name(s)
FROM table_name
WHERE condition
```

### 索引
#### 唯一的索引 (Unique Index)
在表格上面创建某个一个唯一的索引。唯一的索引意味着两个行不能拥有相同的索引值。
```sql
CREATE UNIQUE INDEX 索引名称
ON 表名称 (列名称) 
"列名称" 规定你需要索引的列。
```

#### 简单的索引
在表上创建一个简单的索引。当我们省略关键词 UNIQUE 时，就可以使用重复的值。
```sql
CREATE INDEX 索引名称
ON 表名称 (列名称)
"列名称" 规定你需要索引的列。
```
```sql
CREATE INDEX PersonIndex
ON Person (LastName) 
```
如果希望以降序索引某个列中的值，可以在列名称之后添加保留字 DESC

```sql
CREATE INDEX PersonIndex
ON Person (LastName DESC) 
假如您希望索引不止一个列，您可以在括号中列出这些列的名称，用逗号隔开：

CREATE INDEX PersonIndex
ON Person (LastName, FirstName)
```