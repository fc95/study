CREATE TABLE `employee` (
	`id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '自增长id',
	`ename` VARCHAR(50) NOT NULL COMMENT '员工姓名',
	`ephone` VARCHAR(20) NOT NULL COMMENT '员工电话',
	PRIMARY KEY (`id`)
)
COMMENT='员工表'
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;
