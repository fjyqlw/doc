# MySQL

## 数据库引擎

### InnoDB
支持事务处理，支持外键，支持崩溃修复能力和并发控制。如果需要对事务的完整性要求比较高（比如银行），要求实现并发控制（比如售票），那选择InnoDB有很大的优势。如果需要频繁的更新、删除操作的数据库，也可以选择InnoDB，因为支持事务的提交（commit）和回滚（rollback）。 

### MyISAM
插入数据快，空间和内存使用比较低。如果表主要是用于插入新记录和读出记录，那么选择MyISAM能实现处理高效率。如果应用的完整性、并发性要求比较低，也可以使用。

### MEMORY
所有的数据都在内存中，数据的处理速度快，但是安全性不高。如果需要很快的读写速度，对数据的安全性要求较低，可以选择MEMOEY。它对表的大小有要求，不能建立太大的表。所以，这类数据库只使用在相对较小的数据库表。

**注意**，同一个数据库也可以使用多种存储引擎的表。如果一个表要求比较高的事务处理，可以选择InnoDB。这个数据库中可以将查询要求比较高的表选择MyISAM存储。如果该数据库需要一个用于查询的临时表，可以选择MEMORY存储引擎。

## 查询数据库引擎

```mysql
SHOW ENGINES;
```
|Engine|Support|Comment|Transactions|XA |Savepoints
|--|--|--|--|--|--|
|MEMORY|YES| Hash based, stored in memory, useful for temporary tables | NO | NO   | NO |
| MRG_MYISAM  | YES | Collection of identical MyISAM tables|NO|NO| NO |
|CSV|YES| CSV storage engine| NO |NO|NO|
|FEDERATED|NO| Federated MySQL storage engine|NULL|NULL|NULL|
| PERFORMANCE_SCHEMA|YES| Performance Schema| NO| NO| NO|
| MyISAM  | YES | MyISAM storage engine | NO |NO| NO|
| InnoDB  | DEFAULT | Supports transactions, row-level locking, and foreign keys | YES | YES  | YES |
| BLACKHOLE  | YES  | /dev/null storage engine (anything you write to it disappears) | NO   | NO  | NO|
| ARCHIVE| YES| Archive storage engine| NO | NO | NO |

