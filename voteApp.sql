/*
SQLyog Enterprise v12.09 (64 bit)
MySQL - 5.5.49 : Database - vote
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`vote` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `vote`;

/*Table structure for table `cine` */

DROP TABLE IF EXISTS `cine`;

CREATE TABLE `cine` (
  `cineId` int(11) NOT NULL AUTO_INCREMENT,
  `cineName` varchar(20) NOT NULL,
  `ticket` int(11) DEFAULT NULL,
  `url` varchar(200) NOT NULL,
  `TYPE` varchar(30) DEFAULT NULL,
  `des` varchar(400) DEFAULT NULL,
  `publishTime` date DEFAULT NULL,
  `sta` int(11) DEFAULT '0',
  PRIMARY KEY (`cineId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

/*Data for the table `cine` */

insert  into `cine`(`cineId`,`cineName`,`ticket`,`url`,`TYPE`,`des`,`publishTime`,`sta`) values (15,'wtc',0,'sss','喜剧','sssssssss','2017-01-10',1),(17,'地一柱擎天',NULL,'地一柱擎天','喜剧',NULL,NULL,1);

/*Table structure for table `log` */

DROP TABLE IF EXISTS `log`;

CREATE TABLE `log` (
  `userIP` varchar(50) NOT NULL,
  `token` varchar(50) NOT NULL,
  `cineId` int(11) DEFAULT NULL,
  `voteTime` timestamp NULL DEFAULT NULL,
  `province` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `log` */

insert  into `log`(`userIP`,`token`,`cineId`,`voteTime`,`province`) values ('ss','df',1000,'2017-01-08 02:08:57','xi,an'),('127.0.0.2','ce50efbb9f8e1ef688b046daf05cdc0e',1000,'2017-01-09 11:02:21','陕西'),('fcsdavc','fsadf',1001,'2017-01-10 11:11:55','河北');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
