CREATE TABLE `enquiry` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sname` varchar(100) DEFAULT NULL,
  `cont_no` varchar(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `message` longtext,
  PRIMARY KEY (`id`)
);
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `order_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `mobile_no` varchar(45) DEFAULT NULL,
  `address` varchar(475) DEFAULT NULL,
  `pincode` varchar(45) DEFAULT NULL,
  `email` varchar(145) DEFAULT NULL,
  `itemid` varchar(485) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
commit;