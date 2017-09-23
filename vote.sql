/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 100125
 Source Host           : localhost:3306
 Source Schema         : vote

 Target Server Type    : MySQL
 Target Server Version : 100125
 File Encoding         : 65001

 Date: 23/09/2017 23:37:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cine
-- ----------------------------
DROP TABLE IF EXISTS `cine`;
CREATE TABLE `cine` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '电影id',
  `cineName` varchar(20) NOT NULL COMMENT '电影名',
  `ticket` int(11) DEFAULT NULL COMMENT '电影票数',
  `poster` varchar(200) DEFAULT NULL COMMENT '电影海报',
  `type` varchar(30) DEFAULT NULL COMMENT '电影类型',
  `description` varchar(400) DEFAULT NULL COMMENT '电影描述',
  `publishTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '电影发布时间',
  `state` int(11) DEFAULT '0' COMMENT '电影状态, 0为不显示，1为显示',
  `score` float(5,2) DEFAULT '0.00' COMMENT '电影评分',
  `isNew` tinyint(4) DEFAULT '0' COMMENT '是否最新电影',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cine
-- ----------------------------
BEGIN;
INSERT INTO `cine` VALUES (18, '战狼', 0, 'https://img3.doubanio.com/view/photo/photo/public/p2494292760.webp', '动作/格斗/爱国', '战狼', '2017-09-23 00:00:00', 1, 7.80, 0);
INSERT INTO `cine` VALUES (19, '变形金刚3', 0, 'https://img3.doubanio.com/view/photo/photo/public/p1094397603.webp', '动作/科幻', '变形金刚', '2017-09-24 00:00:00', 1, 7.60, 1);
INSERT INTO `cine` VALUES (20, '一二三', 10, 'https://img3.doubanio.com/view/photo/photo/public/p1094397603.webp', '动作', '一二三', '2017-09-23 17:22:42', 1, 5.60, 1);
INSERT INTO `cine` VALUES (21, '三二一', 10, 'https://img3.doubanio.com/view/photo/photo/public/p1094397603.webp', '一/二/三', '一二三', '2017-09-23 22:03:01', 1, 7.50, 1);
INSERT INTO `cine` VALUES (22, '三二一1111', 10, 'https://img3.doubanio.com/view/photo/photo/public/p1094397603.webp', '一/二/三', '一二三', '2017-09-23 22:09:10', 1, 7.50, 1);
COMMIT;

-- ----------------------------
-- Table structure for log
-- ----------------------------
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `userIP` varchar(50) NOT NULL,
  `token` varchar(50) NOT NULL,
  `cineId` int(11) DEFAULT NULL,
  `voteTime` timestamp NULL DEFAULT NULL,
  `province` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of log
-- ----------------------------
BEGIN;
INSERT INTO `log` VALUES ('ss', 'df', 1000, '2017-01-08 02:08:57', 'xi,an');
INSERT INTO `log` VALUES ('127.0.0.2', 'ce50efbb9f8e1ef688b046daf05cdc0e', 1000, '2017-01-09 11:02:21', '陕西');
INSERT INTO `log` VALUES ('fcsdavc', 'fsadf', 1001, '2017-01-10 11:11:55', '河北');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
