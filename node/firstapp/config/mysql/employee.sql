CREATE TABLE `employee` (
	`id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '������id',
	`ename` VARCHAR(50) NOT NULL COMMENT 'Ա������',
	`ephone` VARCHAR(20) NOT NULL COMMENT 'Ա���绰',
	PRIMARY KEY (`id`)
)
COMMENT='Ա����'
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;
